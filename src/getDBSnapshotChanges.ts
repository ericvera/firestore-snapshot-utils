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

  // Reset meta at the start of processing
  let meta: NormalizeTimestampsMeta = {
    timestampsMap: {},
    counter: 0,
  }

  // First, normalize all beforeDocs timestamps
  const beforeDocsNormalized = beforeDocs
    .sort(ascCompare((a) => a.updateTime.valueOf()))
    .map((doc) => {
      const { result: normalized, meta: updatedMeta } = normalizeTimestamps(
        doc.data(),
        meta,
      )
      meta = updatedMeta // Update meta with the new state
      return { doc, normalizedData: normalized }
    })

  // Then normalize all afterDocs timestamps using the same meta
  const afterDocsNormalized = afterDocs
    .sort(ascCompare((a) => a.updateTime.valueOf()))
    .map((doc) => {
      const { result: normalized, meta: updatedMeta } = normalizeTimestamps(
        doc.data(),
        meta,
      )
      meta = updatedMeta // Update meta with the new state
      return { doc, normalizedData: normalized }
    })

  // Process added and modified docs
  afterDocsNormalized.forEach(
    ({ doc: afterDoc, normalizedData: afterNormalizedData }) => {
      const afterMaskedData = maskProps(
        afterNormalizedData,
        afterDoc.ref.parent.id,
        maskKeys,
      )

      // Get added docs
      const isAdded = beforeDocs.every(
        (beforeDoc) => beforeDoc.ref.path !== afterDoc.ref.path,
      )

      if (isAdded) {
        result.added.push(
          new AddedDocumentSnapshot(afterDoc, afterMaskedData, afterDocs),
        )
        return
      }

      // Get modified and unmodified docs
      const beforeDocData = beforeDocsNormalized.find(
        ({ doc }) => doc.ref.path === afterDoc.ref.path,
      )

      if (!beforeDocData) return

      const { doc: beforeDoc, normalizedData: beforeNormalizedData } =
        beforeDocData
      const beforeMaskedData = maskProps(
        beforeNormalizedData,
        beforeDoc.ref.parent.id,
        maskKeys,
      )

      if (!beforeDoc.updateTime.isEqual(afterDoc.updateTime)) {
        result.modified.push(
          new ModifiedDocumentSnapshot(
            beforeDoc,
            afterDoc,
            beforeMaskedData,
            afterMaskedData,
            afterDocs,
          ),
        )
      } else {
        result.unmodified.push(
          new UnmodifiedDocumentSnapshot(beforeDoc, afterDocs),
        )
      }
    },
  )

  // Process removed docs
  beforeDocsNormalized.forEach(
    ({ doc: beforeDoc, normalizedData: beforeNormalizedData }) => {
      const isRemoved = afterDocs.every(
        (afterDoc) => afterDoc.ref.path !== beforeDoc.ref.path,
      )

      if (isRemoved) {
        const beforeMaskedData = maskProps(
          beforeNormalizedData,
          beforeDoc.ref.parent.id,
          maskKeys,
        )

        result.removed.push(
          new RemovedDocumentSnapshot(beforeDoc, beforeMaskedData, beforeDocs),
        )
      }
    },
  )

  return result
}
