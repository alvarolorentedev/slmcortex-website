---
title: SLM Composer
---

SLM Composer is the deterministic assembly layer.

It loads validated SLM packages, checks compatibility, derives routes from
package metadata, and writes a runtime bundle that Runtime Core can consume
directly.

## Responsibilities

- validate that selected packages can coexist
- derive task and semantic-family routes
- emit stable manifests, reports, and checksums
- keep registry enrichment optional and non-authoritative

## Inputs

- one or more validated SLM packages
- optional registry enrichment file
- composition strategy, currently `routed`

## Outputs

One runtime bundle containing `composition.yaml`, `router_config.json`,
`active_slms.json`, `compatibility_report.json`, `budget_report.json`,
`checksums.json`, and `README.md`.

In v0.1, source packages and checked-in artifacts are never mutated during
composition.
