---
title: Runtime Core
---

Runtime Core is the execution layer for SLMCortex.

It loads a runtime bundle, validates it, picks the right route for a request,
and either performs inference or returns the dry-run route that would have been
used.

## What It Does

- validates runtime bundles before use
- normalizes inference requests
- selects routes from the composed bundle
- loads the base model plus selected adapters for real inference
- exposes the same logic through CLI inference and the compatibility server

## What Goes In

- one runtime bundle
- a prompt or OpenAI-style request payload
- optional overrides such as `task_type`, `semantic_family`, and `slm_override`

## What Comes Out

- validation results from `validate-runtime`
- route details from `infer --dry-run`
- generated completions for real inference or server requests

## Why It Matters

Runtime Core is the layer that makes the packaged system useful instead of just
well-organized. It is where routing, validation, and execution finally meet.

## Where It Sits In The Flow

`validate-runtime`, `infer`, and `serve` live here.

The agent layer sits on top: [Agent Runtime](agent-runtime.md).
