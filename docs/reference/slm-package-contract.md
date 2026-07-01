---
title: SLM Package Contract
---

An SLM package is the reusable artifact format in SLMCortex.

It wraps a trained LoRA adapter with the metadata needed to validate, route,
compose, and reproduce it later.

## Required Package Files

- `slm.yaml`
- `metadata.json`
- `training_config.json`
- `eval.json`
- adapter weights under `adapter/`

Optional files include `README.md` and `examples.jsonl`.

## Typical Layout

```text
slms/python_slm/
├── adapter/
│   ├── adapters.safetensors
│   ├── adapter.gguf
│   └── adapter_config.json
├── slm.yaml
├── README.md
├── eval.json
├── training_config.json
├── metadata.json
└── examples.jsonl
```

A real package uses one adapter weight format, not both:

- MLX packages use `adapter/adapters.safetensors`
- GGUF packages use `adapter/adapter.gguf`

## What The Metadata Is For

The package contract preserves:

- routing hints
- compatibility declarations
- dataset provenance
- checksums
- protected input snapshots

That is what lets Composer and Runtime Core treat a package as a trustworthy
unit instead of a loose folder of weights.

## Minimal Composition Metadata

Self-describing packages can embed composition metadata directly:

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

## Validation Rules

- required files must exist
- `metadata.json` must record deterministic per-file checksums
- protected inputs must be recorded and unchanged
- if `composition` metadata exists, `slm.yaml` and `metadata.json` must agree

## Related Commands

Create a package:

```bash
slmcortex package-slm \
  --slm-id python_slm \
  --name "Python Slm" \
  --adapter-dir artifacts/adapters/python_slm \
  --train-dataset data/train.jsonl \
  --eval-dataset data/eval.jsonl \
  --eval-summary tests/fixtures/slmcortex_demo/eval-summary.json \
  --output slms/python_slm
```

Validate it:

```bash
slmcortex validate-slm-package --path slms/python_slm
```

Compose it:

```bash
slmcortex compose-slms \
  --slms slms/python_slm,slms/debugging_slm \
  --output runtime/debugging_bundle
```
