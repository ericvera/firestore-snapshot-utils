[**firestore-snapshot-utils**](../README.md) • **Docs**

---

[firestore-snapshot-utils](../README.md) / AddedDocumentSnapshot

# Class: AddedDocumentSnapshot

## Constructors

### new AddedDocumentSnapshot()

> **new AddedDocumentSnapshot**(`addedDoc`, `normalizedAddedData`, `allDocs`): [`AddedDocumentSnapshot`](AddedDocumentSnapshot.md)

#### Parameters

| Parameter             | Type                                                        |
| --------------------- | ----------------------------------------------------------- |
| `addedDoc`            | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>   |
| `normalizedAddedData` | `unknown`                                                   |
| `allDocs`             | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |

#### Returns

[`AddedDocumentSnapshot`](AddedDocumentSnapshot.md)

#### Defined in

[internal/DocumentChangeSnapshot.ts:102](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L102)

## Properties

### addedDoc

> `readonly` **addedDoc**: `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>

#### Defined in

[internal/DocumentChangeSnapshot.ts:96](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L96)

---

### normalizedPath

> `readonly` **normalizedPath**: `string`

#### Defined in

[internal/DocumentChangeSnapshot.ts:100](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L100)

## Methods

### getDiff()

> **getDiff**(): `undefined` \| `string`

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`

#### Defined in

[internal/DocumentChangeSnapshot.ts:118](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L118)
