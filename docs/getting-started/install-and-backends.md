---
title: Install and Backends
---

SLMCortex requires Python 3.11+.

## Recommended Install

On macOS and Linux, install the base CLI with Homebrew first:

```bash
brew tap alvarolorentedev/SLMCortex
brew install slmcortex
```

This installs both public launchers:

```bash
slmcortex --help
slmcortex-composer --help
```

## Source Checkout Alternative

Use a source checkout only when you need repo-local demo scripts, editable
development, or direct access to the checked-in fixtures:

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install --upgrade pip
pip install -e '.[test]'
```

This gives you the public CLI plus the repo-local no-model demo flow without
forcing a real inference backend.

## Optional Real-Model Backends

Install one backend only when you need actual local training or inference:

```bash
pip install -e '.[mlx]'   # macOS Apple Silicon
pip install -e '.[gguf]'  # Linux, Windows, macOS Intel, or explicit GGUF use
```

Backend selection comes from base config:

- `backend: auto` chooses MLX on macOS arm64/aarch64
- `backend: auto` chooses GGUF everywhere else
- explicit `backend: mlx` is rejected outside macOS Apple Silicon
- GGUF configs must use a `.gguf` runtime model path
- GGUF training or import conversion needs `gguf_converter`

## Practical Guidance

Start with the base install and the no-model demo. Add a backend only when:

- `infer` must stop being dry-run
- `serve` must answer with real model output
- `train-slm` or adaptive training must run for real

That keeps setup problems separate from product-flow problems.
