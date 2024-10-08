import type { QueryDocumentSnapshot } from 'firebase-admin/firestore'
import { diff } from 'jest-diff'
import { createHash } from 'node:crypto'
import { normalizeTimestamps } from './normalizeTimestamps.js'

export interface DBSnapshotChanges {
  added: AddedDocumentSnapshot[]
  removed: RemovedDocumentSnapshot[]
  modified: ModifiedDocumentSnapshot[]
  unmodified: UnmodifiedDocumentSnapshot[]
}

const noop = <T>(a: T): T => a

const getDiff = (a: unknown, b: unknown): string | undefined => {
  const text = diff(a ?? {}, b ?? {}, {
    omitAnnotationLines: true,
    // Disable color markers generated for console logging
    aColor: noop,
    bColor: noop,
    commonColor: noop,
    changeColor: noop,
    patchColor: noop,
    contextLines: 0,
  })

  if (text?.includes('no visual difference') === true) {
    return
  }

  return text?.toString()
}

/**
 * Creates a normalized ID for a document path based on the content of the
 * document whose path is received (e.g. parent path for a subcCollection item).
 */
const getNormalizedIDForPath = (
  path: string,
  docs: QueryDocumentSnapshot[],
): string => {
  const doc = docs.find((d) => d.ref.path === path)

  if (!doc) {
    throw new Error(`Document not found for path: ${path}`)
  }

  const currentData = doc.data()

  // NOTE: This will only normalize the timestamps within the current document.
  // and not across all documents. So if there is a single timestamp it will
  // just be normalized to /Timestamp 0000/ rather than a timestamp matching
  // across the snapshot.
  const hashData = JSON.stringify(normalizeTimestamps(currentData).result)

  const hash = createHash('md5')
    .update(hashData)
    .digest('base64')
    .replaceAll(/[/\\+=]/g, 'a')

  return hash
}

/**
 * Returns a normalized path for a document, replacing the last segment with
 * '[ID]' and normalizing the parent path if it is a subcollection.
 */
const getDocPath = (
  doc: QueryDocumentSnapshot,
  allDocs: QueryDocumentSnapshot[],
): string => {
  const pathSegments = doc.ref.path.split('/')

  if (pathSegments.length > 4) {
    throw new Error(
      'Path segments longer than 4 not supported yet. Need to implement it.',
    )
  }

  if (pathSegments.length === 4) {
    const parentPath = pathSegments.slice(0, 2).join('/')

    const normalizedID = getNormalizedIDForPath(parentPath, allDocs)

    pathSegments[1] = normalizedID
  }

  pathSegments[pathSegments.length - 1] = '[ID]'

  const normalizedPath = pathSegments.join('/')

  return normalizedPath
}

export class AddedDocumentSnapshot {
  public readonly addedDoc: QueryDocumentSnapshot

  private normalizedAddedData: unknown

  public readonly normalizedPath: string

  constructor(
    addedDoc: QueryDocumentSnapshot,
    normalizedAddedData: unknown,
    allDocs: QueryDocumentSnapshot[],
  ) {
    this.addedDoc = addedDoc
    this.normalizedAddedData = normalizedAddedData

    this.normalizedPath = getDocPath(addedDoc, allDocs)
  }

  /**
   * Returns a string with the differences between two objects or undefined if
   * there are no differences.
   * Timestamps are normalized to a string representation before comparison.
   */
  public getDiff(): string | undefined {
    return getDiff(undefined, this.normalizedAddedData)
  }
}

export class RemovedDocumentSnapshot {
  public readonly removedDoc: QueryDocumentSnapshot

  private normalizedRemovedData: unknown

  public readonly normalizedPath: string

  constructor(
    removedDoc: QueryDocumentSnapshot,
    normalizedRemovedData: unknown,
    allDocs: QueryDocumentSnapshot[],
  ) {
    this.removedDoc = removedDoc
    this.normalizedRemovedData = normalizedRemovedData

    this.normalizedPath = getDocPath(removedDoc, allDocs)
  }

  /**
   * Returns a string with the differences between two objects or undefined if
   * there are no differences.
   * Timestamps are normalized to a string representation before comparison.
   */
  public getDiff(): string | undefined {
    return getDiff(this.normalizedRemovedData, undefined)
  }
}

export class ModifiedDocumentSnapshot {
  public readonly beforeDoc: QueryDocumentSnapshot
  public readonly afterDoc: QueryDocumentSnapshot

  public readonly normalizedPath: string

  private normalizedBeforeData: unknown
  private normalizedAfterData: unknown

  constructor(
    beforeDoc: QueryDocumentSnapshot,
    afterDoc: QueryDocumentSnapshot,
    normalizeBeforeData: unknown,
    normalizeAfterData: unknown,
    allDocs: QueryDocumentSnapshot[],
  ) {
    this.beforeDoc = beforeDoc
    this.afterDoc = afterDoc

    this.normalizedBeforeData = normalizeBeforeData
    this.normalizedAfterData = normalizeAfterData

    this.normalizedPath = getDocPath(afterDoc, allDocs)
  }

  /**
   * Returns a string with the differences between two objects or undefined if
   * there are no differences.
   * Timestamps are normalized to a string representation before comparison.
   */
  public getDiff(): string | undefined {
    return getDiff(this.normalizedBeforeData, this.normalizedAfterData)
  }
}

export class UnmodifiedDocumentSnapshot {
  public readonly doc: QueryDocumentSnapshot

  public readonly normalizedPath: string

  constructor(doc: QueryDocumentSnapshot, allDocs: QueryDocumentSnapshot[]) {
    this.doc = doc

    this.normalizedPath = getDocPath(doc, allDocs)
  }

  /**
   * Returns a string with the differences between two objects or undefined if
   * there are no differences.
   * Timestamps are normalized to a string representation before comparison.
   */
  public getDiff(): string | undefined {
    return
  }
}
