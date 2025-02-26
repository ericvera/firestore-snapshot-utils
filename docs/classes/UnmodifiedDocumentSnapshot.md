[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / UnmodifiedDocumentSnapshot

# Class: UnmodifiedDocumentSnapshot

Defined in: [internal/DocumentChangeSnapshot.ts:193](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L193)

## Extends

- `BaseDocumentSnapshot`

## Constructors

### new UnmodifiedDocumentSnapshot()

> **new UnmodifiedDocumentSnapshot**(`doc`, `allDocs`, `normalizedData`?): [`UnmodifiedDocumentSnapshot`](UnmodifiedDocumentSnapshot.md)

Defined in: [internal/DocumentChangeSnapshot.ts:103](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L103)

#### Parameters

| Parameter         | Type                                                        |
| ----------------- | ----------------------------------------------------------- |
| `doc`             | `QueryDocumentSnapshot`                                     |
| `allDocs`         | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |
| `normalizedData`? | `unknown`                                                   |

#### Returns

[`UnmodifiedDocumentSnapshot`](UnmodifiedDocumentSnapshot.md)

#### Inherited from

`BaseDocumentSnapshot.constructor`

## Properties

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

Defined in: [internal/DocumentChangeSnapshot.ts:199](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L199)

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`

#### Overrides

`BaseDocumentSnapshot.getDiff`
