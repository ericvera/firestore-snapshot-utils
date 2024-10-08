import { Timestamp } from 'firebase-admin/firestore'

export interface NormalizeTimestampsMeta {
  timestampsMap: Record<string, number | undefined>
  counter: number
}

interface NormalizeTimestampsResult {
  result: unknown
  meta: NormalizeTimestampsMeta
}

/**
 * Normalizes Timestamp objects to a string representation that can be compared
 * for equality.
 */
export const normalizeTimestamps = (
  a: unknown,
  meta?: NormalizeTimestampsMeta,
): NormalizeTimestampsResult => {
  let localCounter = meta?.counter ?? 0
  let localTimestampsMap = Object.assign(meta?.timestampsMap ?? {}) as Record<
    string,
    number | undefined
  >

  if (a instanceof Timestamp) {
    const aTimestamp = a
    const timeValue = aTimestamp.valueOf()
    let normalizedValue = localTimestampsMap[timeValue]

    if (normalizedValue === undefined) {
      normalizedValue = localCounter++
      localTimestampsMap[timeValue] = normalizedValue
    }

    return {
      // NOTE: Results in /Timestamp 0000/, /Timestamp 0001/, ... for simplicity
      // of knowing the different timestamps. They are not sequential, but only
      // in the order they were found.
      result: `/Timestamp ${normalizedValue.toString().padStart(4, '0')}/`,
      meta: { counter: localCounter, timestampsMap: localTimestampsMap },
    }
  }

  if (typeof a === 'object' && !Array.isArray(a)) {
    const aNormalized: Record<string, unknown> = {}
    const obj = a as Record<string, unknown>

    for (const key in obj) {
      const { result, meta } = normalizeTimestamps(
        obj[key] as Readonly<unknown>,
        {
          counter: localCounter,
          timestampsMap: localTimestampsMap,
        },
      )

      localCounter = meta.counter
      localTimestampsMap = meta.timestampsMap

      aNormalized[key] = result
    }

    return {
      result: aNormalized,
      meta: {
        counter: localCounter,
        timestampsMap: localTimestampsMap,
      },
    }
  }

  return {
    result: a,
    meta: {
      counter: localCounter,
      timestampsMap: localTimestampsMap,
    },
  }
}
