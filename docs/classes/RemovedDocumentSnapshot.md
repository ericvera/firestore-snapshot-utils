[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / RemovedDocumentSnapshot

# Class: RemovedDocumentSnapshot

Defined in: [internal/DocumentChangeSnapshot.ts:123](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L123)

## Constructors

### new RemovedDocumentSnapshot()

> **new RemovedDocumentSnapshot**(`removedDoc`, `normalizedRemovedData`, `allDocs`): [`RemovedDocumentSnapshot`](RemovedDocumentSnapshot.md)

Defined in: [internal/DocumentChangeSnapshot.ts:130](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L130)

#### Parameters

| Parameter               | Type                                                        |
| ----------------------- | ----------------------------------------------------------- |
| `removedDoc`            | `QueryDocumentSnapshot`                                     |
| `normalizedRemovedData` | `unknown`                                                   |
| `allDocs`               | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |

#### Returns

[`RemovedDocumentSnapshot`](RemovedDocumentSnapshot.md)

## Properties

### normalizedPath

> `readonly` **normalizedPath**: `string`

Defined in: [internal/DocumentChangeSnapshot.ts:128](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L128)

---

### removedDoc

> `readonly` **removedDoc**: `QueryDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:124](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L124)

## Methods

### getDiff()

> **getDiff**(): `undefined` \| `string`

Defined in: [internal/DocumentChangeSnapshot.ts:146](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L146)

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`
