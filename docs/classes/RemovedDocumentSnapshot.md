[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / RemovedDocumentSnapshot

# Class: RemovedDocumentSnapshot

Defined in: [internal/DocumentChangeSnapshot.ts:141](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L141)

## Extends

- `BaseDocumentSnapshot`

## Constructors

### Constructor

> **new RemovedDocumentSnapshot**(`removedDoc`, `normalizedRemovedData`, `allDocs`): `RemovedDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:144](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L144)

#### Parameters

| Parameter               | Type                                                        |
| ----------------------- | ----------------------------------------------------------- |
| `removedDoc`            | `QueryDocumentSnapshot`                                     |
| `normalizedRemovedData` | `unknown`                                                   |
| `allDocs`               | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |

#### Returns

`RemovedDocumentSnapshot`

#### Overrides

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

Defined in: [internal/DocumentChangeSnapshot.ts:158](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L158)

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`

#### Overrides

`BaseDocumentSnapshot.getDiff`
