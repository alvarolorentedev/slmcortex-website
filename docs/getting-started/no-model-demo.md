---
title: No-Model Demo
---

The no-model demo validates the product path without downloading models or
loading weights.

```bash
DEMO_ROOT="$(mktemp -d "${TMPDIR:-/tmp}/slmcortex-demo.XXXXXX")"
python scripts/run_slmcortex_demo.py --output-root "$DEMO_ROOT"
```

It exercises:

- packaging existing adapters into self-describing SLM packages
- composing packages into one runtime bundle
- validating the runtime bundle before execution
- dry-run routing for inference
- bounded agent control flow against a local repository

Expected outputs under `$DEMO_ROOT`:

```text
python_slm/
debugging_slm/
runtime/
agent-trace.json
```

Use this as the default health check. Real local training is slower and depends
on local hardware, Python environment, backend tooling, and model availability.
