---
title: SLM Factory
---

SLM Factory is the packaging boundary for SLMCortex v0.1.

It turns an existing adapter directory plus provenance into a self-describing
SLM package without retraining a model or mutating checked-in research
artifacts.

## Responsibilities

- package an existing adapter into a deterministic SLM artifact
- optionally run the product `train-slm` wrapper for built-in research SLMs
- record provenance, checksums, protected input snapshots, and composition metadata
- validate emitted package files for internal consistency

## Inputs

- adapter directory with `adapters.safetensors` or `adapter.gguf`
- train and eval dataset paths for provenance
- eval summary JSON
- optional examples and composition metadata

## Outputs

One package directory containing `slm.yaml`, `metadata.json`,
`training_config.json`, `eval.json`, `README.md`, and `adapter/`.

SLM Factory owns the `package-slm` and product `train-slm` stages of the demo
flow.
