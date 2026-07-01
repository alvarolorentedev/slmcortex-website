---
title: Repo Boundary Map
---

This page answers one simple question:

Where is the public product surface, and where are the supporting internals?

## Canonical Boundaries

- `src/`: public CLI, package/runtime tooling, and bounded agent surface
- `configs/`: runtime defaults and governed SLM registry inputs
- `data/`: canonical datasets and benchmarks
- `slms/`: SLM catalog mirror and package artifacts
- `examples/`: runnable examples and smoke snippets
- `docs/`: user-facing docs, specs, and architecture notes
- `scripts/`: demo, validation, and governance helpers
- `tests/`: unit, integration, and regression coverage
- `artifacts/`: immutable adapters, fixtures, and generated governance outputs

## Stability Policy

- keep `slmcortex` as the canonical public identity
- keep generated artifacts immutable
- keep public docs product-first
- do not casually change adapter semantics, registry semantics, or benchmark data

## Source Of Truth

- public CLI entry point: `slmcortex`
- runtime and package implementation: `src/`
- SLM registry: `src/slmcortex_resources/configs/slm_registry.json`
- SLM metadata: `src/slmcortex_resources/configs/slms.yaml`
- SLM mirror: `slms/slm_registry.json`, `slms/slms.yaml`
