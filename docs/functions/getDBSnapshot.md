[**firestore-snapshot-utils**](../README.md) • **Docs**

---

[firestore-snapshot-utils](../README.md) / getDBSnapshot

# Function: getDBSnapshot()

> **getDBSnapshot**(`dbRefs`): `Promise`\<`QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[]\>

Returns all documents in a flat list from the provided DB references.

## Parameters

| Parameter | Type                                 | Description                                                                                       |
| --------- | ------------------------------------ | ------------------------------------------------------------------------------------------------- |
| `dbRefs`  | `TestableDBRef` \| `TestableDBRef`[] | The DB references to get the documents from. Can be a single reference or an array of references. |

## Returns

`Promise`\<`QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[]\>

## Defined in

getDBSnapshot.ts:12
