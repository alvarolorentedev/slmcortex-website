---
title: Install and Backends
---

SLMCortex requires Python 3.11+.

## Recommended local setup

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install --upgrade pip
pip install -e '.[test]'
```

This installs the CLI and test/demo dependencies without requiring real model
backends.

## Optional real-model backends

```bash
pip install -e '.[mlx]'   # macOS Apple Silicon
pip install -e '.[gguf]'  # Linux, Windows, macOS Intel, or explicit GGUF use
```

Backend selection comes from base config:

- `backend: auto` uses MLX only on macOS arm64/aarch64.
- Linux, Windows, and macOS Intel default to GGUF.
- Explicit `backend: mlx` is rejected outside macOS Apple Silicon.
- GGUF configs must point `model` or `default_runtime_model` at a `.gguf` file.
- GGUF training or import conversion must set `gguf_converter`.

Use the no-model demo before running real training or inference.
