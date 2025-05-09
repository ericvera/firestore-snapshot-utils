[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / UnmodifiedDocumentSnapshot

# Class: UnmodifiedDocumentSnapshot

Defined in: [internal/DocumentChangeSnapshot.ts:195](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L195)

## Extends

- `BaseDocumentSnapshot`

## Constructors

### Constructor

> **new UnmodifiedDocumentSnapshot**(`doc`, `allDocs`, `normalizedData?`): `UnmodifiedDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:105](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L105)

#### Parameters

| Parameter         | Type                                                        |
| ----------------- | ----------------------------------------------------------- |
| `doc`             | `QueryDocumentSnapshot`                                     |
| `allDocs`         | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |
| `normalizedData?` | `unknown`                                                   |

#### Returns

`UnmodifiedDocumentSnapshot`

#### Inherited from

`BaseDocumentSnapshot.constructor`

## Properties

### doc

> `protected` `readonly` **doc**: `QueryDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:106](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L106)

#### Inherited from

`BaseDocumentSnapshot.doc`

---

### normalizedData?

> `protected` `readonly` `optional` **normalizedData**: `unknown`

Defined in: [internal/DocumentChangeSnapshot.ts:108](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L108)

#### Inherited from

`BaseDocumentSnapshot.normalizedData`

---

### normalizedPath

> `readonly` **normalizedPath**: `string`

Defined in: [internal/DocumentChangeSnapshot.ts:103](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L103)

#### Inherited from

`BaseDocumentSnapshot.normalizedPath`

## Methods

### getDiff()

> **getDiff**(): `undefined` \| `string`

Defined in: [internal/DocumentChangeSnapshot.ts:201](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L201)

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`

#### Overrides

`BaseDocumentSnapshot.getDiff`
