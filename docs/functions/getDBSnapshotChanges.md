[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / getDBSnapshotChanges

# Function: getDBSnapshotChanges()

> **getDBSnapshotChanges**(`beforeDocs`, `afterDocs`, `maskKeys`): [`DBSnapshotChanges`](../interfaces/DBSnapshotChanges.md)

Defined in: [getDBSnapshotChanges.ts:16](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/getDBSnapshotChanges.ts#L16)

## Parameters

| Parameter    | Type                             |
| ------------ | -------------------------------- |
| `beforeDocs` | `QueryDocumentSnapshot`[]        |
| `afterDocs`  | `QueryDocumentSnapshot`[]        |
| `maskKeys`   | `Record`\<`string`, `string`[]\> |

## Returns

[`DBSnapshotChanges`](../interfaces/DBSnapshotChanges.md)
