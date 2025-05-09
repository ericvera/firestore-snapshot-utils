[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / ModifiedDocumentSnapshot

# Class: ModifiedDocumentSnapshot

Defined in: [internal/DocumentChangeSnapshot.ts:163](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L163)

## Extends

- `BaseDocumentSnapshot`

## Constructors

### Constructor

> **new ModifiedDocumentSnapshot**(`beforeDoc`, `afterDoc`, `normalizeBeforeData`, `normalizeAfterData`, `allDocs`): `ModifiedDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:170](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L170)

#### Parameters

| Parameter             | Type                                                        |
| --------------------- | ----------------------------------------------------------- |
| `beforeDoc`           | `QueryDocumentSnapshot`                                     |
| `afterDoc`            | `QueryDocumentSnapshot`                                     |
| `normalizeBeforeData` | `unknown`                                                   |
| `normalizeAfterData`  | `unknown`                                                   |
| `allDocs`             | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |

#### Returns

`ModifiedDocumentSnapshot`

#### Overrides

`BaseDocumentSnapshot.constructor`

## Properties

### afterDoc

> `readonly` **afterDoc**: `QueryDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:165](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L165)

---

### beforeDoc

> `readonly` **beforeDoc**: `QueryDocumentSnapshot`

Defined in: [internal/DocumentChangeSnapshot.ts:164](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L164)

---

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

Defined in: [internal/DocumentChangeSnapshot.ts:190](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L190)

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`

#### Overrides

`BaseDocumentSnapshot.getDiff`
