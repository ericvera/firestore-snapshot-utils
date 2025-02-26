[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / RemovedDocumentSnapshot

# Class: RemovedDocumentSnapshot

Defined in: [internal/DocumentChangeSnapshot.ts:139](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L139)

## Extends

- `BaseDocumentSnapshot`

## Constructors

### new RemovedDocumentSnapshot()

> **new RemovedDocumentSnapshot**(`removedDoc`, `normalizedRemovedData`, `allDocs`): [`RemovedDocumentSnapshot`](RemovedDocumentSnapshot.md)

Defined in: [internal/DocumentChangeSnapshot.ts:142](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L142)

#### Parameters

| Parameter               | Type                                                        |
| ----------------------- | ----------------------------------------------------------- |
| `removedDoc`            | `QueryDocumentSnapshot`                                     |
| `normalizedRemovedData` | `unknown`                                                   |
| `allDocs`               | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |

#### Returns

[`RemovedDocumentSnapshot`](RemovedDocumentSnapshot.md)

#### Overrides

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

Defined in: [internal/DocumentChangeSnapshot.ts:156](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L156)

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`

#### Overrides

`BaseDocumentSnapshot.getDiff`
