---
title: Repo Boundary Map
---

SLMCortex is the canonical public product surface for the source repository.

## Canonical boundaries

- `src/`: public product CLI, package/runtime tooling, and bounded agent surface
- `configs/`: runtime defaults and governed SLM registry inputs
- `data/`: canonical datasets and benchmarks
- `slms/`: SLM catalog mirror and package artifacts
- `examples/`: runnable examples and smoke snippets
- `docs/`: specs, architecture notes, and user-facing documentation
- `scripts/`: validation, demo, and governance helpers
- `tests/`: unit, integration, and regression coverage
- `artifacts/`: immutable adapters, validation fixtures, and generated governance outputs

## Stability policy

- Do not change model behavior, adapters, registry semantics, or benchmark data.
- Keep `slmcortex` as the canonical public identity.
- Keep generated artifacts immutable.
- Keep public documentation product-first.

## Current source of truth

- Public CLI entry point: `slmcortex`
- Product runtime/package implementation: `src/`
- SLM registry: `configs/slm_registry.json`
- SLM metadata: `configs/slms.yaml`
- SLM mirror: `slms/slm_registry.json`, `slms/slms.yaml`
- Datasets and benchmarks: `data/`
- Checked-in adapters and validation fixtures: `artifacts/`
