[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / AddedDocumentSnapshot

# Class: AddedDocumentSnapshot

Defined in: [internal/DocumentChangeSnapshot.ts:114](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L114)

## Extends

- `BaseDocumentSnapshot`

## Constructors

### new AddedDocumentSnapshot()

> **new AddedDocumentSnapshot**(`addedDoc`, `normalizedAddedData`, `allDocs`): [`AddedDocumentSnapshot`](AddedDocumentSnapshot.md)

Defined in: [internal/DocumentChangeSnapshot.ts:119](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L119)

#### Parameters

| Parameter             | Type                                                        |
| --------------------- | ----------------------------------------------------------- |
| `addedDoc`            | `QueryDocumentSnapshot`                                     |
| `normalizedAddedData` | `unknown`                                                   |
| `allDocs`             | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |

#### Returns

[`AddedDocumentSnapshot`](AddedDocumentSnapshot.md)

#### Overrides

`BaseDocumentSnapshot.constructor`

## Properties

### addedDoc

> `readonly` **addedDoc**: `QueryDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:115](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L115)

---

### doc

> `protected` `readonly` **doc**: `QueryDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:104](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L104)

#### Inherited from

`BaseDocumentSnapshot.doc`

---

### normalizedData?

> `protected` `readonly` `optional` **normalizedData**: `unknown`

Defined in: [internal/DocumentChangeSnapshot.ts:106](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L106)

#### Inherited from

`BaseDocumentSnapshot.normalizedData`

---

### normalizedPath

> `readonly` **normalizedPath**: `string`

Defined in: [internal/DocumentChangeSnapshot.ts:101](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L101)

#### Inherited from

`BaseDocumentSnapshot.normalizedPath`

## Methods

### getDiff()

> **getDiff**(): `undefined` \| `string`

Defined in: [internal/DocumentChangeSnapshot.ts:134](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L134)

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`

#### Overrides

`BaseDocumentSnapshot.getDiff`
