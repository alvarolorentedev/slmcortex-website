---
title: SLM Packages
---

An SLM package is the unit of distribution in SLMCortex.

It wraps a trained LoRA adapter with the metadata needed to validate, route,
compose, and reproduce the package later. Packaging records provenance,
fingerprints, protected input snapshots, evaluation data, and optional
composition metadata.

Typical package layout:

```text
slms/python_slm/
├── adapter/
│   ├── adapters.safetensors   # MLX packages
│   ├── adapter.gguf           # GGUF packages
│   └── adapter_config.json
├── slm.yaml
├── README.md
├── eval.json
├── training_config.json
├── metadata.json
└── examples.jsonl
```

`examples.jsonl` is optional. A package uses one adapter weight format: MLX
packages use `adapter/adapters.safetensors`; GGUF packages use
`adapter/adapter.gguf`.

Create a package from an existing adapter:

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

Validate it before composition:

```bash
slmcortex validate-slm-package --path slms/python_slm
```
