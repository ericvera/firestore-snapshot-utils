# Mise Configuration

Mise directory: .mise/
Branch convention: feat/<slug> for features, fix/<slug> for bug fixes
Ship: merge (squash)

## Quality commands

- Format: yarn prettier --write .
- Check:
  - yarn lint
  - yarn build
- Unit tests: none — this project has no test runner by choice; treat this slot as satisfied and verify per Test exceptions

## Test exceptions

- Any change (no test runner or e2e infrastructure exists) — verify with `yarn build` (strict typecheck), `yarn lint`, and type-level checks in the public API surface

## Models

- implementer: opus
- explore: opus
- retrospective: opus
