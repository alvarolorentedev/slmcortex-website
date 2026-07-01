---
title: Quickstart
---

Use this path for the first successful SLMCortex run with the fewest moving
parts.

It stays close to the current public product story:

- install the base CLI
- check the public entry point
- run the no-model demo
- inspect the Composer-first commands

## 1. Install

On macOS and Linux, start with Homebrew:

```bash
brew tap alvarolorentedev/SLMCortex
brew install slmcortex
slmcortex --help
slmcortex-composer --help
```

Or install directly from the tap in one command:

```bash
brew install alvarolorentedev/SLMCortex/slmcortex
```

Use a source checkout only when you specifically want the repo-local demo
scripts, editable development, or deeper Factory work:

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install --upgrade pip
pip install -e '.[test]'
```

Install a real-model backend only when you need actual training or inference:

```bash
pip install -e '.[mlx]'   # macOS Apple Silicon
pip install -e '.[gguf]'  # Linux, Windows, macOS Intel, or explicit GGUF use
```

`backend: auto` uses MLX on macOS arm64/aarch64 and GGUF everywhere else.

## 2. Check The Public CLI

```bash
slmcortex --help
slmcortex doctor
```

`doctor` is the quickest way to confirm the packaged workspace contract,
backend visibility, and general install health.

## 3. Run The No-Model Demo

```bash
DEMO_ROOT="$(mktemp -d "${TMPDIR:-/tmp}/slmcortex-demo.XXXXXX")"
python scripts/run_slmcortex_demo.py --output-root "$DEMO_ROOT"
```

This source-checkout demo is the fallback validation path when you want to
inspect the product layers from the repository itself.

This validates the full product path without loading a real model:

- package two checked-in adapters
- compose one runtime bundle
- validate the runtime
- run inference in `--dry-run`
- run the bounded agent in `--dry-run`

Expected outputs under `$DEMO_ROOT`:

```text
python_slm/
debugging_slm/
runtime/
agent-trace.json
```

## 4. Inspect The Composer-First Path

The default product direction is Composer-first:

```bash
slmcortex doctor
slmcortex compose-folder --help
```

This is the path to use when you want to point SLMCortex at a folder, compose
a runtime, and export the result without manually walking through Factory
commands first.

## 5. Source Checkout Alternative

If you are intentionally working from a source checkout and want to see the
product layers one command at a time:

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

## 6. What To Read Next

- [Packaged Install](packaged-install.md) for the product-style install flow
- [No-Model Demo](no-model-demo.md) for the fastest validation path explained on its own
- [Local Coding Agent Setup](local-coding-agent-setup.md) for repo work
- [Command Reference](../reference/command-reference.md) for the full CLI surface
