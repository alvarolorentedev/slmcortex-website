---
title: No-Model Demo
---

The no-model demo is the safest first proof that SLMCortex is wired correctly.

It validates the product flow without downloading model weights or running real
inference.

## Run It

```bash
DEMO_ROOT="$(mktemp -d "${TMPDIR:-/tmp}/slmcortex-demo.XXXXXX")"
python scripts/run_slmcortex_demo.py --output-root "$DEMO_ROOT"
```

## What It Checks

- packaging existing adapters into self-describing SLM packages
- composing those packages into one runtime bundle
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

## Why This Matters

This is the shortest route to answering the practical question:

"Does the product flow work on this machine at all?"

If the demo fails, fix that first. It is much cheaper than debugging real model
downloads, backend installs, or local training issues at the same time.

## Related Checks

If you want a package-first smoke for an arbitrary SLM ID:

```bash
python scripts/run_slmcortex_arbitrary_slm_smoke.py
```

If you want the slower real-training variant:

```bash
python scripts/run_slmcortex_arbitrary_slm_smoke.py --real-training
```

Treat those as follow-up validation, not the default first step.
