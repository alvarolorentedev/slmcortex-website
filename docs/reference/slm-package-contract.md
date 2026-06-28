---
title: SLM Package Contract
---

An SLM package is a reusable artifact for a trained LoRA adapter. It preserves
router semantics, registry semantics, accepted datasets, and checked-in
benchmark artifacts.

## Required package files

- `slm.yaml`
- `metadata.json`
- `training_config.json`
- `eval.json`
- adapter weights under `adapter/`

Optional package files include `README.md` and `examples.jsonl`.

## Routing metadata

Discovery reads direct child folders under `--slms-dir`. A discoverable package
only needs `slm.yaml`; `routing_card.json`, `eval_summary.json`,
`examples.jsonl`, and `adapter/` are optional for discovery.

```yaml
slm_id: fastapi_contract
name: FastAPI Contract Slm
description: FastAPI endpoints with Pydantic validation.
capabilities:
  - fastapi
  - pydantic
activation_cues:
  - FastAPI
  - Pydantic
avoid_when:
  - frontend-only task
task_type_hint: api_generation
base_model: optional-base-model-id
adapter_path: adapter
```

## Composition metadata

Self-describing packages use `composition` metadata as the source of truth:

```yaml
composition:
  capabilities:
    allowed_task_types: [debugging]
  activation:
    default_route_type: adapter
    scope: task
  compatibility:
    compatible_slms: []
    incompatible_slms: []
  routing:
    tasks: {}
```

Required fields:

- `composition.capabilities.allowed_task_types`
- `composition.activation.default_route_type`
- `composition.activation.scope`

## Validation rules

- Required package files and adapter weights must exist.
- `metadata.json` must record deterministic per-file checksums.
- Protected input snapshots must be recorded and unchanged.
- If `composition` metadata is present, `slm.yaml` and `metadata.json` must match.
- Validation rechecks package checksums and protected input hashes when source files still exist.

Protected inputs include train/eval datasets, base/training configs, registry
configs, SLM configs, adapter artifacts, and benchmark files.

## Runtime bundle contract

`compose-slms` writes:

```text
composition.yaml
router_config.json
active_slms.json
compatibility_report.json
budget_report.json
checksums.json
README.md
```

The bundle is the Runtime Core startup artifact. Runtime Core does not require
registry state at startup or inference time.
