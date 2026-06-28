---
title: Routing and Validation
---

SLMCortex can route tasks against discovered SLM packages without composing a
bundle or loading adapter weights.

```bash
slmcortex route \
  --slms-dir slms \
  --repo . \
  --task "Create a FastAPI endpoint with Pydantic validation" \
  --explain
```

Routing reads optional metadata from `slm.yaml`, including capabilities,
activation cues, avoid rules, task type hints, base model, and adapter path.

Package-first composition uses `composition` metadata as the source of truth:

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

Validation rechecks package files, checksums, protected inputs, and composition
schema when composition metadata is present.
