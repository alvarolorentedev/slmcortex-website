---
title: Runtime Core
---

Runtime Core is the serving and local inference layer.

It loads a runtime bundle, validates manifests and checksums, selects the route
for a request, and either performs inference or returns a dry-run routing
decision.

## Responsibilities

- validate runtime bundles before use
- normalize chat-style inference requests
- select task and semantic-family routes
- load the base model plus selected adapters for real inference
- expose the same core logic through CLI inference and the compatibility server

## Inputs

- one runtime bundle
- prompt or OpenAI-style request payload
- optional overrides such as `task_type`, `semantic_family`, and `slm_override`

## Outputs

- validation status for `validate-runtime`
- dry-run route details for `infer --dry-run`
- generated completion payloads for real inference or server requests

The compatibility server is non-streaming and intentionally thin in v0.1.
