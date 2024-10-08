[**firestore-snapshot-utils**](../README.md) • **Docs**

---

[firestore-snapshot-utils](../README.md) / UnmodifiedDocumentSnapshot

# Class: UnmodifiedDocumentSnapshot

## Constructors

### new UnmodifiedDocumentSnapshot()

> **new UnmodifiedDocumentSnapshot**(`doc`, `allDocs`): [`UnmodifiedDocumentSnapshot`](UnmodifiedDocumentSnapshot.md)

#### Parameters

| Parameter | Type                                                        |
| --------- | ----------------------------------------------------------- |
| `doc`     | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>   |
| `allDocs` | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |

#### Returns

[`UnmodifiedDocumentSnapshot`](UnmodifiedDocumentSnapshot.md)

#### Defined in

[internal/DocumentChangeSnapshot.ts:191](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L191)

## Properties

### doc

> `readonly` **doc**: `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>

#### Defined in

[internal/DocumentChangeSnapshot.ts:187](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L187)

---

### normalizedPath

> `readonly` **normalizedPath**: `string`

#### Defined in

[internal/DocumentChangeSnapshot.ts:189](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L189)

## Methods

### getDiff()

> **getDiff**(): `undefined` \| `string`

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`

#### Defined in

[internal/DocumentChangeSnapshot.ts:202](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L202)
