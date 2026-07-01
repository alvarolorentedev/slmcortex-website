---
title: Slm Composer
---

Slm Composer is the assembly layer.

It takes validated SLM packages, checks whether they can coexist, derives
routes from their metadata, and writes one runtime bundle that Runtime Core can
load directly.

## What It Does

- validates that selected packages can coexist
- derives task and semantic-family routes from package metadata
- writes stable manifests, reports, and checksums
- keeps source packages immutable during composition

## What Goes In

- one or more validated SLM packages
- optional registry enrichment
- a composition strategy, currently `routed`

## What Comes Out

One runtime bundle containing:

- `composition.yaml`
- `router_config.json`
- `active_slms.json`
- `compatibility_report.json`
- `budget_report.json`
- `checksums.json`
- `README.md`

## Why It Matters

Composer is the bridge between "I have some packaged capabilities" and
"I have a runtime I can actually validate and run."

That runtime bundle is the unit of deployment.

## Where It Sits In The Flow

`compose-slms` and `compose-folder` route through this layer.

The next layer is [Runtime Core](runtime-core.md), which validates and uses the
bundle at execution time.
