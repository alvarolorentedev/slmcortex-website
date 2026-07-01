---
title: Slm Factory
---

Slm Factory is the packaging boundary in SLMCortex.

Its job is simple: take an existing adapter plus its provenance and turn it
into a reusable SLM package that the rest of the system can trust.

## What It Does

- packages an existing adapter into a deterministic SLM artifact
- records provenance, checksums, protected inputs, and composition metadata
- optionally runs the product `train-slm` wrapper when you want training plus packaging
- validates that the emitted package is internally consistent

## What Goes In

- an adapter directory
- train and eval dataset paths for provenance
- an eval summary
- optional examples and composition metadata

## What Comes Out

One SLM package directory containing:

- `slm.yaml`
- `metadata.json`
- `training_config.json`
- `eval.json`
- `README.md`
- `adapter/`

## Why It Matters

Factory is where a loose adapter becomes a portable capability.

Without this step, the rest of the system has no stable contract for routing,
validation, or composition.

## Where It Sits In The Flow

`package-slm` and `train-slm` live here.

The next layer is [Slm Composer](slm-composer.md), which combines validated
packages into a runtime bundle.
