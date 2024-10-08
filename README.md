# firestore-snapshot-utils

**Utils for testing Firestore DB snapshots**

[![github license](https://img.shields.io/github/license/ericvera/firestore-snapshot-utils.svg?style=flat-square)](https://github.com/ericvera/firestore-snapshot-utils/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/firestore-snapshot-utils.svg?style=flat-square)](https://npmjs.org/package/firestore-snapshot-utils)

Features:

- Get snapshot for a db collection
- Generate an object with changes (add/remove/change)
- Normalized Timestamps in changes
- Mask properties (e.g. IDs that change with every test)
- Generate a textual diff with changes

## Configuration before you start:

### Add NPM_TOKEN to the repo secrets

    NOTE: The package must have been published at least once with `npm publish` in order to be able to generate a granular token scoped to the specific package.

1. [Get a token](https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-granular-access-tokens-on-the-website) from npmjs.com
2. [Add a secret with the npm token to be used by Github Actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions). The secret must be named `NPM_TOKEN`.

# API Reference

See [docs](docs/README.md)
