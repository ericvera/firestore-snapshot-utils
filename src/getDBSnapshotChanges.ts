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

  // Create a new meta object for this specific call
  let meta: NormalizeTimestampsMeta = {
    timestampsMap: {},
    counter: 0,
  }

  // First, normalize all documents in a deterministic order
  const allDocs = [...beforeDocs, ...afterDocs].sort(
    ascCompare((a) => a.createTime.valueOf()),
  )

  const normalizedDocsMap = new Map<
    string,
    { doc: QueryDocumentSnapshot; normalizedData: unknown }
  >()

  // Normalize all documents once, in a single pass
  allDocs.forEach((doc) => {
    const { result: normalized, meta: updatedMeta } = normalizeTimestamps(
      doc.data(),
      meta,
    )
    meta = updatedMeta
    normalizedDocsMap.set(doc.ref.path, { doc, normalizedData: normalized })
  })

  // Process added and modified docs
  afterDocs.forEach((afterDoc) => {
    const afterNormalizedData = normalizedDocsMap.get(
      afterDoc.ref.path,
    )?.normalizedData
    if (!afterNormalizedData) return

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
    const beforeDoc = beforeDocs.find(
      (doc) => doc.ref.path === afterDoc.ref.path,
    )

    if (!beforeDoc) {
      return
    }

    const beforeNormalizedData = normalizedDocsMap.get(
      beforeDoc.ref.path,
    )?.normalizedData

    if (!beforeNormalizedData) {
      return
    }

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
  })

  // Process removed docs
  beforeDocs.forEach((beforeDoc) => {
    const isRemoved = afterDocs.every(
      (afterDoc) => afterDoc.ref.path !== beforeDoc.ref.path,
    )

    if (isRemoved) {
      const beforeNormalizedData = normalizedDocsMap.get(
        beforeDoc.ref.path,
      )?.normalizedData

      if (!beforeNormalizedData) {
        return
      }

      const beforeMaskedData = maskProps(
        beforeNormalizedData,
        beforeDoc.ref.parent.id,
        maskKeys,
      )

      result.removed.push(
        new RemovedDocumentSnapshot(beforeDoc, beforeMaskedData, beforeDocs),
      )
    }
  })

  return result
}
