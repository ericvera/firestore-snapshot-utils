[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / UnmodifiedDocumentSnapshot

# Class: UnmodifiedDocumentSnapshot

Defined in: [internal/DocumentChangeSnapshot.ts:186](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L186)

## Constructors

### new UnmodifiedDocumentSnapshot()

> **new UnmodifiedDocumentSnapshot**(`doc`, `allDocs`): [`UnmodifiedDocumentSnapshot`](UnmodifiedDocumentSnapshot.md)

Defined in: [internal/DocumentChangeSnapshot.ts:191](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L191)

#### Parameters

| Parameter | Type                      |
| --------- | ------------------------- |
| `doc`     | `QueryDocumentSnapshot`   |
| `allDocs` | `QueryDocumentSnapshot`[] |

#### Returns

[`UnmodifiedDocumentSnapshot`](UnmodifiedDocumentSnapshot.md)

## Properties

### doc

> `readonly` **doc**: `QueryDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:187](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L187)

---

### normalizedPath

> `readonly` **normalizedPath**: `string`

Defined in: [internal/DocumentChangeSnapshot.ts:189](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L189)

## Methods

### getDiff()

> **getDiff**(): `undefined` \| `string`

Defined in: [internal/DocumentChangeSnapshot.ts:202](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L202)

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`
