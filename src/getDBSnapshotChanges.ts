import type { QueryDocumentSnapshot } from 'firebase-admin/firestore'
import { ascCompare } from './internal/ascCompare.js'
import type { DBSnapshotChanges } from './internal/DocumentChangeSnapshot.js'
import {
  AddedDocumentSnapshot,
  ModifiedDocumentSnapshot,
  RemovedDocumentSnapshot,
  UnmodifiedDocumentSnapshot,
} from './internal/DocumentChangeSnapshot.js'
import {
  extractTimestamps,
  TimestampDebugOptions,
} from './internal/extractTimestamps.js'
import { maskProps } from './internal/maskProps.js'
import { normalizeData } from './internal/normalizeData.js'

export interface DebugOptions {
  logTimestamps?: boolean
}

export const getDBSnapshotChanges = (
  beforeDocs: QueryDocumentSnapshot[],
  afterDocs: QueryDocumentSnapshot[],
  // Object with key as a collection name and value as an array of keys to mask
  maskKeys: Record<string, string[]> = {},
  debugOptions: DebugOptions = {},
): DBSnapshotChanges => {
  const result: DBSnapshotChanges = {
    added: [],
    removed: [],
    modified: [],
    unmodified: [],
  }

  // Step 1: Extract all unique timestamps from all documents
  let timestampValues = new Set<string>()

  // Collect timestamps from beforeDocs
  beforeDocs.forEach((doc) => {
    // Merge the extracted timestamps into our set
    const timestampDebugOptions: TimestampDebugOptions = {
      logTimestamps: debugOptions.logTimestamps ?? false,
      docPath: doc.ref.path,
    }

    const docTimestamps = extractTimestamps(doc.data(), timestampDebugOptions)
    timestampValues = new Set([...timestampValues, ...docTimestamps])
  })

  // Collect timestamps from afterDocs
  afterDocs.forEach((doc) => {
    // Merge the extracted timestamps into our set
    const timestampDebugOptions: TimestampDebugOptions = {
      logTimestamps: debugOptions.logTimestamps ?? false,
      docPath: doc.ref.path,
    }

    const docTimestamps = extractTimestamps(doc.data(), timestampDebugOptions)
    timestampValues = new Set([...timestampValues, ...docTimestamps])
  })

  // Step 2: Sort timestamps chronologically
  const sortedTimestamps = Array.from(timestampValues).sort()

  // Log sorted timestamps if debug is enabled
  if (debugOptions.logTimestamps && sortedTimestamps.length > 0) {
    console.log('\nSorted timestamps (chronological order):')

    sortedTimestamps.forEach((timestamp, index) => {
      // Convert timestamp string back to date for readable output
      console.log(`  ${index.toString().padStart(3, '0')}: ${timestamp}`)
    })

    console.log('')
  }

  // Step 3: Normalize all documents by replacing timestamps
  const beforeDocsNormalized = beforeDocs
    .sort(ascCompare((a) => a.updateTime.valueOf()))
    .map((doc) => {
      const normalizedData = normalizeData(doc.data(), sortedTimestamps)
      return { doc, normalizedData }
    })

  const afterDocsNormalized = afterDocs
    .sort(ascCompare((a) => a.updateTime.valueOf()))
    .map((doc) => {
      const normalizedData = normalizeData(doc.data(), sortedTimestamps)
      return { doc, normalizedData }
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
