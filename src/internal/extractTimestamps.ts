import { Timestamp } from 'firebase-admin/firestore'

/**
 * Extracts all unique timestamp values from an object into a Set.
 * The values are stored as strings (from timestamp.valueOf()) for easy sorting.
 *
 * This function is idempotent - calling it multiple times with the same input
 * will always produce the same output, and it doesn't modify any input parameters.
 *
 * @param value - The value to extract timestamps from
 * @returns A new Set containing all unique timestamp values as strings
 */
export const extractTimestamps = (value: unknown): Set<string> => {
  const result = new Set<string>()

  // Internal recursive function that uses the result Set
  const extract = (val: unknown): void => {
    // Handle Timestamp objects
    if (val instanceof Timestamp) {
      result.add(val.valueOf())
      return
    }

    // Handle arrays
    if (Array.isArray(val)) {
      for (const item of val) {
        extract(item)
      }
      return
    }

    // Handle objects (but not null)
    if (typeof val === 'object' && val !== null) {
      for (const v of Object.values(val)) {
        extract(v)
      }
    }
  }

  // Start the extraction process
  extract(value)

  // Return the result Set
  return result
}
