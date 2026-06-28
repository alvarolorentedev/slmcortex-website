---
title: Quickstart
---

Use this path for the first successful end-to-end run with the fewest moving
parts. It avoids model downloads and weight loading.

## 1. Install

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install --upgrade pip
pip install -e '.[test]'
```

Optional real-model backends:

```bash
pip install -e '.[mlx]'   # macOS Apple Silicon
pip install -e '.[gguf]'  # Linux, Windows, macOS Intel, or explicit GGUF use
```

Check the public CLI:

```bash
python -m slmcortex --help
```

## 2. Run the no-model demo

```bash
DEMO_ROOT="$(mktemp -d "${TMPDIR:-/tmp}/slmcortex-demo.XXXXXX")"
python scripts/run_slmcortex_demo.py --output-root "$DEMO_ROOT"
```

The demo packages checked-in adapters, composes a runtime bundle, validates the
runtime, runs dry-run inference, and runs the bounded agent in dry-run mode.

Expected outputs:

```text
python_slm/
debugging_slm/
runtime/
agent-trace.json
```

## 3. Run the same flow by hand

```bash
DEMO_ROOT="$(mktemp -d "${TMPDIR:-/tmp}/slmcortex-demo.XXXXXX")"

slmcortex package-slm \
  --slm-id python_slm \
  --name "Python Slm" \
  --adapter-dir artifacts/adapters/python_slm \
  --train-dataset tests/fixtures/slmcortex_demo/train.jsonl \
  --eval-dataset tests/fixtures/slmcortex_demo/eval.jsonl \
  --eval-summary tests/fixtures/slmcortex_demo/eval-summary.json \
  --output "$DEMO_ROOT/python_slm"

slmcortex package-slm \
  --slm-id debugging_slm \
  --name "Debugging Slm" \
  --adapter-dir artifacts/adapters/debugging_slm \
  --train-dataset tests/fixtures/slmcortex_demo/train.jsonl \
  --eval-dataset tests/fixtures/slmcortex_demo/eval.jsonl \
  --eval-summary tests/fixtures/slmcortex_demo/eval-summary.json \
  --output "$DEMO_ROOT/debugging_slm"

slmcortex compose-slms \
  --slms "$DEMO_ROOT/python_slm,$DEMO_ROOT/debugging_slm" \
  --output "$DEMO_ROOT/runtime"

slmcortex validate-runtime --runtime "$DEMO_ROOT/runtime"

slmcortex infer \
  --runtime "$DEMO_ROOT/runtime" \
  --prompt "Fix this Python traceback" \
  --dry-run

slmcortex agent run \
  --runtime "$DEMO_ROOT/runtime" \
  --repo /path/to/local/repo \
  --task "Fix the failing answer implementation." \
  --dry-run
```

Use the [command reference](../reference/command-reference.md) for every public
CLI command and flag group.
