# 🔥 Firestore Snapshot Utils

[![github license](https://img.shields.io/github/license/ericvera/firestore-snapshot-utils.svg?style=flat-square)](https://github.com/ericvera/firestore-snapshot-utils/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/firestore-snapshot-utils.svg?style=flat-square)](https://npmjs.org/package/firestore-snapshot-utils)

**A lightweight utility for testing Firestore database snapshots with precision.**

Testing Firestore database changes shouldn't be painful. This lightweight utility makes it simple to track and verify Firestore collection changes in your tests.

## ✨ Features

- 🔍 **Snapshot Retrieval** - Get snapshots from Firestore queries
- 🔄 **Change Detection** - Track document additions, removals, and modifications
- ⏱️ **Timestamp Normalization** - Compare timestamps reliably across test runs
- 🔒 **Property Masking** - Ignore sensitive or variable properties in comparisons
- 📊 **Human-readable Diffs** - See exactly what changed in your database
- 🧪 **Test Data Normalization** - Normalize timestamps and buffers in any data structure for stable test snapshots
- 📘 **TypeScript Support** - Fully typed API with strict type checking

## 📦 Installation

```bash
npm install firestore-snapshot-utils
# or
yarn add firestore-snapshot-utils
```

## 🚀 Quick Start

```typescript
import {
  getDBSnapshot,
  getDBSnapshotChanges,
  getDiffFromDBSnapshotChanges,
  normalizeData,
} from 'firestore-snapshot-utils'

// Before operation
const beforeDocs = await getDBSnapshot(firestore.collection('users'))

// Run your database operations...

// After operation
const afterDocs = await getDBSnapshot(firestore.collection('users'))

// Compare snapshots
const changes = getDBSnapshotChanges(beforeDocs, afterDocs, {
  // Mask sensitive fields
  users: ['id', 'createdAt'],
})

// Generate readable diff
console.log(getDiffFromDBSnapshotChanges(changes))
```

## 📚 API Reference

### getDBSnapshot

```typescript
function getDBSnapshot(
  queries: Query | Query[],
): Promise<QueryDocumentSnapshot[]>
```

Gets documents from one or more Firestore queries as a flat array.

**Example:**

```typescript
// Single collection
const docs = await getDBSnapshot(firestore.collection('users'))

// Multiple collections
const docs = await getDBSnapshot([
  firestore.collection('users'),
  firestore.collection('products'),
])
```

### getDBSnapshotChanges

```typescript
function getDBSnapshotChanges(
  beforeDocs: QueryDocumentSnapshot[],
  afterDocs: QueryDocumentSnapshot[],
  maskKeys: Record<string, string[]> = {},
  debugOptions: { logTimestamps?: boolean } = {},
): DBSnapshotChanges
```

Compares two document sets and identifies what changed.

**Example:**

```typescript
const changes = getDBSnapshotChanges(beforeDocs, afterDocs, {
  users: ['id', 'createdAt'], // Mask these fields
  products: ['updatedAt'],
})
```

### getDiffFromDBSnapshotChanges

```typescript
function getDiffFromDBSnapshotChanges(changes: DBSnapshotChanges): string
```

Creates a human-readable diff from database changes.

**Example with Jest:**

```typescript
expect(getDiffFromDBSnapshotChanges(changes)).toMatchInlineSnapshot()
```

### normalizeData

```typescript
function normalizeData<T = unknown>(
  data: T,
  options?: { logTimestamps?: boolean },
): T
```

Normalizes Firestore Timestamp and Buffer objects in any data structure for deterministic testing.

**Example:**

```typescript
import { Timestamp } from 'firebase-admin/firestore'

const testData = {
  createdAt: new Timestamp(1234567890, 0),
  user: {
    lastLogin: new Timestamp(1234567891, 0),
  },
}

const normalized = normalizeData(testData)

// Use in tests for stable snapshots
expect(normalizeData(actualData)).toMatchInlineSnapshot(`
  Object {
    "createdAt": "/Timestamp 0000/",
    "user": Object {
      "lastLogin": "/Timestamp 0001/",
    },
  }
`)
```

## 🧪 Testing Example

```typescript
describe('User profile update', () => {
  it('should update user data correctly', async () => {
    // Before state
    const beforeDocs = await getDBSnapshot(
      firestore.collection('users').where('id', '==', userId),
    )

    // Run operation
    await updateUserProfile(userId, { name: 'New Name' })

    // After state
    const afterDocs = await getDBSnapshot(
      firestore.collection('users').where('id', '==', userId),
    )

    // Compare with masked timestamps
    const changes = getDBSnapshotChanges(beforeDocs, afterDocs, {
      users: ['updatedAt'],
    })

    // Verify against snapshot
    expect(getDiffFromDBSnapshotChanges(changes)).toMatchInlineSnapshot(`
      "DB DIFF

      --------------------------------
       MODIFIED (path: users/[ID])
      --------------------------------
      - Expected
      + Received

        Object {
      -   "name": "Old Name",
      +   "name": "New Name",
        }"
    `)
  })
})
```

## 📝 Notes

- Timestamps are automatically normalized for consistent comparisons
- Buffer objects are converted to base64url strings for reliable diff generation
- The `normalizeData` function can be used standalone to normalize test data with Timestamps and Buffers

## 🤝 AI Disclosure

This library's documentation has been enhanced with AI assistance. All code and functionality has been carefully designed and tested by humans.

## 📄 License

MIT
