[**firestore-snapshot-utils**](../README.md)

---

[firestore-snapshot-utils](../README.md) / getDBSnapshotChanges

# Function: getDBSnapshotChanges()

> **getDBSnapshotChanges**(`beforeDocs`, `afterDocs`, `maskKeys`, `debugOptions`): [`DBSnapshotChanges`](../interfaces/DBSnapshotChanges.md)

Defined in: [getDBSnapshotChanges.ts:21](https://github.com/ericvera/firestore-snapshot-utils/blob/main/src/getDBSnapshotChanges.ts#L21)

## Parameters

| Parameter      | Type                                                        |
| -------------- | ----------------------------------------------------------- |
| `beforeDocs`   | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |
| `afterDocs`    | `QueryDocumentSnapshot`\<`DocumentData`, `DocumentData`\>[] |
| `maskKeys`     | `Record`\<`string`, `string`[]\>                            |
| `debugOptions` | [`DebugOptions`](../interfaces/DebugOptions.md)             |

## Returns

[`DBSnapshotChanges`](../interfaces/DBSnapshotChanges.md)
