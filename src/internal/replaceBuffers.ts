import { Buffer } from 'node:buffer'

/**
 * Replaces all Buffer objects in a value with base64url string representations.
 * The normalized format is: /Buffer <base64url>/ where the base64url is the
 * base64url-encoded value of the buffer.
 *
 * This function is idempotent - calling it multiple times with the same input
 * will always produce the same output, and it doesn't modify any input parameters.
 *
 * @param value - The value to process
 * @returns A new value with Buffers replaced by their normalized representations
 */
export const replaceBuffers = (value: unknown): unknown => {
  // Handle Buffer objects
  if (Buffer.isBuffer(value)) {
    return `/Buffer ${value.toString('base64url')}/`
  }

  // Handle arrays - create a new array to avoid modifying the input
  if (Array.isArray(value)) {
    return value.map((item) => replaceBuffers(item))
  }

  // Handle objects (but not null) - create a new object to avoid modifying the input
  if (typeof value === 'object' && value !== null) {
    const result: Record<string, unknown> = {}

    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      result[key] = replaceBuffers(val)
    }

    return result
  }

  // For primitive values, return as is
  return value
}
