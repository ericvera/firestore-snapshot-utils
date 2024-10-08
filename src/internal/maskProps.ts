// NOTE: Currently only works with props that exist in the top level of the
// object
export const maskProps = <T>(
  a: T,
  collection: string,
  maskKeys: Record<string, string[]>,
): T => {
  if (typeof a !== 'object' || Array.isArray(a) || a === null) {
    return a
  }

  const keys = maskKeys[collection]

  if (keys) {
    const obj = a as Record<string, unknown>

    for (const key of keys) {
      if (typeof obj[key] === 'string') {
        obj[key] = obj[key].replace(/./g, '•')
      }
    }
  }

  return a
}
