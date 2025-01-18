# Firestore Snapshot Utils

**Utils for testing Firestore DB snapshots**

[![github license](https://img.shields.io/github/license/ericvera/firestore-snapshot-utils.svg?style=flat-square)](https://github.com/ericvera/firestore-snapshot-utils/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/firestore-snapshot-utils.svg?style=flat-square)](https://npmjs.org/package/firestore-snapshot-utils)

A lightweight utility library for testing Firestore database snapshots, making it easier to track and verify changes in your Firestore collections.

## Features

- **Snapshot Retrieval**: Get snapshots from single or multiple Firestore queries
- **Change Detection**: Track document additions, removals, and modifications
- **Timestamp Normalization**: Consistent representation of Firestore timestamps for reliable comparisons
- **Property Masking**: Mask sensitive or variable properties (e.g., IDs, timestamps) for deterministic testing
- **Diff Generation**: Generate human-readable diffs of database changes
- **TypeScript Support**: Full TypeScript support with strict type checking

## Usage

```typescript
import {
  getDBSnapshot,
  getDBSnapshotChanges,
  getDiffFromDBSnapshotChanges,
} from 'firestore-snapshot-utils'

// Get snapshots before changes
const beforeDocs = await getDBSnapshot(beforeQuery)

// Perform tests...

// Get snapshots after changes
const afterDocs = await getDBSnapshot(afterQuery)

// Compare snapshots and get changes
const changes = getDBSnapshotChanges(beforeDocs, afterDocs, {
  // Optional: mask sensitive fields by collection
  users: ['id', 'createdAt'],
})

// Generate human-readable diff. This can be used with expect.toMatchInlineSnapshot('<diff content>')
console.log(getDiffFromDBSnapshotChanges(changes))
```

# API Reference

See [docs](docs/README.md)
