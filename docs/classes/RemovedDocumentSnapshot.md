[**firestore-snapshot-utils**](../README.md) • **Docs**

---

[firestore-snapshot-utils](../README.md) / RemovedDocumentSnapshot

# Class: RemovedDocumentSnapshot

## Constructors

### new RemovedDocumentSnapshot()

> **new RemovedDocumentSnapshot**(`removedDoc`, `normalizedRemovedData`, `allDocs`): [`RemovedDocumentSnapshot`](RemovedDocumentSnapshot.md)

#### Parameters

| Parameter               | Type                                                        |
| ----------------------- | ----------------------------------------------------------- |
| `removedDoc`            | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>   |
| `normalizedRemovedData` | `unknown`                                                   |
| `allDocs`               | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |

#### Returns

[`RemovedDocumentSnapshot`](RemovedDocumentSnapshot.md)

#### Defined in

[internal/DocumentChangeSnapshot.ts:130](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L130)

## Properties

### normalizedPath

> `readonly` **normalizedPath**: `string`

#### Defined in

[internal/DocumentChangeSnapshot.ts:128](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L128)

---

### removedDoc

> `readonly` **removedDoc**: `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>

#### Defined in

[internal/DocumentChangeSnapshot.ts:124](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L124)

## Methods

### getDiff()

> **getDiff**(): `undefined` \| `string`

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`

#### Defined in

[internal/DocumentChangeSnapshot.ts:146](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L146)
