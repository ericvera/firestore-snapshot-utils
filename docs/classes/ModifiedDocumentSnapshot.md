[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / ModifiedDocumentSnapshot

# Class: ModifiedDocumentSnapshot

Defined in: [internal/DocumentChangeSnapshot.ts:161](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L161)

## Extends

- `BaseDocumentSnapshot`

## Constructors

### new ModifiedDocumentSnapshot()

> **new ModifiedDocumentSnapshot**(`beforeDoc`, `afterDoc`, `normalizeBeforeData`, `normalizeAfterData`, `allDocs`): [`ModifiedDocumentSnapshot`](ModifiedDocumentSnapshot.md)

Defined in: [internal/DocumentChangeSnapshot.ts:168](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L168)

#### Parameters

| Parameter             | Type                                                        |
| --------------------- | ----------------------------------------------------------- |
| `beforeDoc`           | `QueryDocumentSnapshot`                                     |
| `afterDoc`            | `QueryDocumentSnapshot`                                     |
| `normalizeBeforeData` | `unknown`                                                   |
| `normalizeAfterData`  | `unknown`                                                   |
| `allDocs`             | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |

#### Returns

[`ModifiedDocumentSnapshot`](ModifiedDocumentSnapshot.md)

#### Overrides

`BaseDocumentSnapshot.constructor`

## Properties

### afterDoc

> `readonly` **afterDoc**: `QueryDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:163](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L163)

---

### beforeDoc

> `readonly` **beforeDoc**: `QueryDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:162](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L162)

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

Defined in: [internal/DocumentChangeSnapshot.ts:188](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L188)

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`

#### Overrides

`BaseDocumentSnapshot.getDiff`
