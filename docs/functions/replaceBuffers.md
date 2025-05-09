[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / replaceBuffers

# Function: replaceBuffers()

> **replaceBuffers**(`value`): `unknown`

Defined in: [internal/replaceBuffers.ts:14](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/replaceBuffers.ts#L14)

Replaces all Buffer objects in a value with base64url string representations.
The normalized format is: /Buffer <base64url>/ where the base64url is the
base64url-encoded value of the buffer.

This function is idempotent - calling it multiple times with the same input
will always produce the same output, and it doesn't modify any input parameters.

## Parameters

| Parameter | Type      | Description          |
| --------- | --------- | -------------------- |
| `value`   | `unknown` | The value to process |

## Returns

`unknown`

A new value with Buffers replaced by their normalized representations
