import type { QueryDocumentSnapshot } from 'firebase-admin/firestore'
import { ascCompare } from './internal/ascCompare.js'
import type { DBSnapshotChanges } from './internal/DocumentChangeSnapshot.js'
import {
  AddedDocumentSnapshot,
  ModifiedDocumentSnapshot,
  RemovedDocumentSnapshot,
  UnmodifiedDocumentSnapshot,
} from './internal/DocumentChangeSnapshot.js'
import { maskProps } from './internal/maskProps.js'
import {
  normalizeTimestamps,
  type NormalizeTimestampsMeta,
} from './internal/normalizeTimestamps.js'

export const getDBSnapshotChanges = (
  beforeDocs: QueryDocumentSnapshot[],
  afterDocs: QueryDocumentSnapshot[],
  // Object with key as a collection name and value as an array of keys to mask
  maskKeys: Record<string, string[]> = {},
): DBSnapshotChanges => {
  const result: DBSnapshotChanges = {
    added: [],
    removed: [],
    modified: [],
    unmodified: [],
  }

  let currentMeta: NormalizeTimestampsMeta = {
    timestampsMap: {},
    counter: 0,
  }

  afterDocs
    // Sort to keep the order consistent across runs
    .sort(ascCompare((a) => a.updateTime.valueOf()))
    .forEach((afterDoc) => {
      // Get added docs
      const isAdded = beforeDocs.every(
        (beforeDoc) => beforeDoc.ref.path !== afterDoc.ref.path,
      )

      if (isAdded) {
        const { result: afterDocNormalized, meta } = normalizeTimestamps(
          afterDoc.data(),
          currentMeta,
        )
        currentMeta = meta

        const normalizedData = maskProps(
          afterDocNormalized,
          afterDoc.ref.parent.id,
          maskKeys,
        )

        result.added.push(
          new AddedDocumentSnapshot(afterDoc, normalizedData, afterDocs),
        )
        return
      }

      // Get modified and unmodified docs
      const beforeDoc = beforeDocs.find(
        (doc) => doc.ref.path === afterDoc.ref.path,
      )

      if (!beforeDoc) {
        return
      }

      const { result: beforeDocNormalized, meta: metaBefore } =
        normalizeTimestamps(beforeDoc.data(), currentMeta)

      currentMeta = metaBefore

      const beforeNormalizedData = maskProps(
        beforeDocNormalized,
        beforeDoc.ref.parent.id,
        maskKeys,
      )

      if (!beforeDoc.updateTime.isEqual(afterDoc.updateTime)) {
        // Only needed if modified
        const { result: afterDocNormalized, meta: metaAfter } =
          normalizeTimestamps(afterDoc.data(), currentMeta)

        currentMeta = metaAfter

        const afterNormalizedData = maskProps(
          afterDocNormalized,
          afterDoc.ref.parent.id,
          maskKeys,
        )

        result.modified.push(
          new ModifiedDocumentSnapshot(
            beforeDoc,
            afterDoc,
            beforeNormalizedData,
            afterNormalizedData,
            afterDocs,
          ),
        )
      } else {
        result.unmodified.push(
          new UnmodifiedDocumentSnapshot(beforeDoc, afterDocs),
        )
      }
    })

  // Get removed docs
  beforeDocs
    // Sort to keep the order consistent across runs
    .sort(ascCompare((a) => a.updateTime.valueOf()))
    .forEach((beforeDoc) => {
      const isRemoved = afterDocs.every(
        (afterDoc) => afterDoc.ref.path !== beforeDoc.ref.path,
      )

      if (isRemoved) {
        const { result: beforeDocNormalized, meta } = normalizeTimestamps(
          beforeDoc.data(),
          currentMeta,
        )

        currentMeta = meta

        const normalizedData = maskProps(
          beforeDocNormalized,
          beforeDoc.ref.parent.id,
          maskKeys,
        )

        result.removed.push(
          new RemovedDocumentSnapshot(beforeDoc, normalizedData, beforeDocs),
        )
      }
    })

  return result
}
