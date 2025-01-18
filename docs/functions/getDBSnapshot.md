[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / getDBSnapshot

# Function: getDBSnapshot()

> **getDBSnapshot**(`queries`): `Promise`\<`QueryDocumentSnapshot`[]\>

Defined in: [getDBSnapshot.ts:8](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/getDBSnapshot.ts#L8)

Returns all documents in a flat list from the provided DB queries.

## Parameters

| Parameter | Type                 | Description                                                                             |
| --------- | -------------------- | --------------------------------------------------------------------------------------- |
| `queries` | `Query` \| `Query`[] | The DB queries to get the documents from. Can be a single query or an array of queries. |

## Returns

`Promise`\<`QueryDocumentSnapshot`[]\>
