[**firestore-snapshot-utils**](../README.md) • **Docs**

---

[firestore-snapshot-utils](../README.md) / ModifiedDocumentSnapshot

# Class: ModifiedDocumentSnapshot

## Constructors

### new ModifiedDocumentSnapshot()

> **new ModifiedDocumentSnapshot**(`beforeDoc`, `afterDoc`, `normalizeBeforeData`, `normalizeAfterData`, `allDocs`): [`ModifiedDocumentSnapshot`](ModifiedDocumentSnapshot.md)

#### Parameters

| Parameter             | Type                                                        |
| --------------------- | ----------------------------------------------------------- |
| `beforeDoc`           | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>   |
| `afterDoc`            | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>   |
| `normalizeBeforeData` | `unknown`                                                   |
| `normalizeAfterData`  | `unknown`                                                   |
| `allDocs`             | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |

#### Returns

[`ModifiedDocumentSnapshot`](ModifiedDocumentSnapshot.md)

#### Defined in

[internal/DocumentChangeSnapshot.ts:160](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L160)

## Properties

### afterDoc

> `readonly` **afterDoc**: `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>

#### Defined in

[internal/DocumentChangeSnapshot.ts:153](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L153)

---

### beforeDoc

> `readonly` **beforeDoc**: `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>

#### Defined in

[internal/DocumentChangeSnapshot.ts:152](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L152)

---

### normalizedPath

> `readonly` **normalizedPath**: `string`

#### Defined in

[internal/DocumentChangeSnapshot.ts:155](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L155)

## Methods

### getDiff()

> **getDiff**(): `undefined` \| `string`

Returns a string with the differences between two objects or undefined if
there are no differences.
Timestamps are normalized to a string representation before comparison.

#### Returns

`undefined` \| `string`

#### Defined in

[internal/DocumentChangeSnapshot.ts:181](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/internal/DocumentChangeSnapshot.ts#L181)
