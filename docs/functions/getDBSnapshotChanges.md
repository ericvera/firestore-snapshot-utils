[**firestore-snapshot-utils**](../README.md) • **Docs**

---

[firestore-snapshot-utils](../README.md) / getDBSnapshotChanges

# Function: getDBSnapshotChanges()

> **getDBSnapshotChanges**(`beforeDocs`, `afterDocs`, `maskKeys`): [`DBSnapshotChanges`](../interfaces/DBSnapshotChanges.md)

## Parameters

| Parameter    | Type                                                        |
| ------------ | ----------------------------------------------------------- |
| `beforeDocs` | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |
| `afterDocs`  | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |
| `maskKeys`   | `Record`\<`string`, `string`[]\>                            |

## Returns

[`DBSnapshotChanges`](../interfaces/DBSnapshotChanges.md)

## Defined in

[getDBSnapshotChanges.ts:16](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/getDBSnapshotChanges.ts#L16)
