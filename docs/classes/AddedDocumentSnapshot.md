[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / AddedDocumentSnapshot

# Class: AddedDocumentSnapshot

Defined in: [internal/DocumentChangeSnapshot.ts:95](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L95)

## Constructors

### new AddedDocumentSnapshot()

> **new AddedDocumentSnapshot**(`addedDoc`, `normalizedAddedData`, `allDocs`): [`AddedDocumentSnapshot`](AddedDocumentSnapshot.md)

Defined in: [internal/DocumentChangeSnapshot.ts:102](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L102)

#### Parameters

| Parameter             | Type                      |
| --------------------- | ------------------------- |
| `addedDoc`            | `QueryDocumentSnapshot`   |
| `normalizedAddedData` | `unknown`                 |
| `allDocs`             | `QueryDocumentSnapshot`[] |

#### Returns

[`AddedDocumentSnapshot`](AddedDocumentSnapshot.md)

## Properties

### addedDoc

> `readonly` **addedDoc**: `QueryDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:96](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L96)

---

### normalizedPath

> `readonly` **normalizedPath**: `string`

Defined in: [internal/DocumentChangeSnapshot.ts:100](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L100)

## Methods

### getDiff()

> **getDiff**(): `undefined` \| `string`

Defined in: [internal/DocumentChangeSnapshot.ts:118](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L118)

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`
