import type { DBSnapshotChanges } from './internal/DocumentChangeSnapshot.js'

const TextLine = '--------------------------------'

/**
 * Returns a string with the differences between two snapshots of a Firestore
 * database.
 */
export const getDiffFromDBSnapshotChanges = (
  changes: DBSnapshotChanges,
): string => {
  const results: string[] = []

  if (changes.added.length > 0) {
    changes.added.forEach((snapshot) => {
      let text = snapshot.getDiff() ?? ''

      // Remove first line of text as it is not useful (only shows the object
      // removed)
      text = text.split('\n').slice(1).join('\n')

      text = `${TextLine}\n ADDED (path: ${snapshot.normalizedPath})\n${TextLine}\n${text}`
      results.push(text)
    })
  }

  if (changes.removed.length > 0) {
    changes.removed.forEach((snapshot) => {
      let text = snapshot.getDiff() ?? ''

      // Remove first line of text as it is not useful (only shows the object
      // added)
      text = text.split('\n').slice(1).join('\n')

      text = `${TextLine}\n REMOVED (path: ${snapshot.normalizedPath})\n${TextLine}\n${text}`
      results.push(text)
    })
  }

  if (changes.modified.length > 0) {
    changes.modified.forEach((snapshot) => {
      let text = snapshot.getDiff() ?? ''

      text = `${TextLine}\n MODIFIED (path: ${snapshot.normalizedPath})\n${TextLine}\n${text}`
      results.push(text)
    })
  }

  // Sort results to keep the order consistent across runs
  return `DB DIFF\n\n${results.sort().join(`\n${TextLine}\n\n`)}`
}
