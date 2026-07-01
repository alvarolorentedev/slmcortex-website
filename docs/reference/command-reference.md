---
title: Command Reference
---

This page covers the public CLI surface in one place.

Use `slmcortex` or `python -m slmcortex`.

On macOS and Linux, the expected first install path is the Homebrew tap:
[`alvarolorentedev/homebrew-SLMCortex`](https://github.com/alvarolorentedev/homebrew-SLMCortex).

## Start With These Commands

If you are new to the project, learn these first:

| Command | What it is for |
| --- | --- |
| `slmcortex doctor` | check install health, workspace paths, and backend visibility |
| `slmcortex compose-folder` | scan one folder, pick packages, compose a runtime, and optionally export it |
| `slmcortex infer --dry-run` | inspect routing without loading a real model |
| `slmcortex serve` | expose the local compatibility server |
| `slmcortex agent run` | run bounded repository work against a local checkout |

## Product Paths

There are two practical ways to think about the CLI:

- **Composer-first product path:** `doctor`, `compose-folder`, `infer`, `serve`, `agent run`
- **Factory/package path:** `generate-dataset`, `validate-dataset`, `train-slm`, `package-slm`, `compose-slms`

The Composer-first path is what most visitors should start with.

## Common Conventions

- Prefer `--dry-run` when you only want to inspect routing or control flow.
- `infer` requires exactly one of `--runtime` or `--slms-dir`.
- `agent run` requires exactly one of `--runtime` or `--slms-dir` unless project defaults exist.
- `backend: auto` resolves to MLX on macOS Apple Silicon and GGUF elsewhere.
- GGUF requires a `.gguf` runtime model path.

## Composer-First Commands

### `doctor`

Check packaged-product readiness and workspace health.

```bash
slmcortex doctor
slmcortex doctor --workspace /tmp/slmcortex-app
slmcortex doctor --export-support-bundle
```

### `compose-folder`

Compose a runtime from one local folder and the external app workspace.

```bash
slmcortex compose-folder \
  --workspace /tmp/slmcortex-app \
  --folder /path/to/repo \
  --task "Create a FastAPI endpoint with request validation" \
  --export-descriptor /tmp/slmcortex-app/exports/repo.json
```

### `init`

Create project-local SLMCortex state for the project-owned LoRA flow.

```bash
slmcortex init
```

### `loras download`

Download a selected project-owned LoRA into the local SLM directory.

```bash
slmcortex loras download fastapi
slmcortex loras download hf://owner/repo --as fastapi
```

### `infer`

Run local inference or inspect routing with `--dry-run`.

```bash
slmcortex infer \
  --runtime /tmp/slmcortex-demo/runtime \
  --prompt "Fix this Python traceback" \
  --dry-run
```

Or use an SLM directory directly:

```bash
slmcortex infer \
  --slms-dir .slmcortex/prototype-slms \
  --prompt "Fix a FastAPI validation bug" \
  --allow-remote-loras \
  --dry-run
```

### `serve`

Expose the local OpenAI-compatible compatibility server.

```bash
slmcortex serve --runtime /tmp/slmcortex-demo/runtime
```

Or use the adaptive path:

```bash
slmcortex serve \
  --slms-dir .slmcortex/prototype-slms \
  --allow-remote-loras \
  --dry-run
```

### `agent run`

Run bounded local repository work.

```bash
slmcortex agent run \
  --runtime /tmp/slmcortex-demo/runtime \
  --repo /path/to/local/repo \
  --task "Fix the failing answer implementation." \
  --dry-run
```

## Factory And Package Commands

### `generate-dataset`

Generate deterministic train and eval JSONL datasets.

```bash
slmcortex generate-dataset \
  --slm-id fastapi_contract \
  --domain fastapi \
  --report-output /tmp/fastapi_contract-report.json
```

### `validate-dataset`

Validate one dataset and optionally check leakage against eval data.

```bash
slmcortex validate-dataset datasets/fastapi_contract/train.jsonl \
  --eval-dataset datasets/fastapi_contract/eval.jsonl
```

### `train-slm`

Train a LoRA SLM from datasets and package it as a Slm Cortex artifact.

```bash
slmcortex train-slm \
  --slm-id fastapi_contract \
  --name "FastAPI Contract Slm" \
  --train-dataset datasets/fastapi_contract/train.jsonl \
  --eval-dataset datasets/fastapi_contract/eval.jsonl \
  --output slms/fastapi_contract
```

### `package-slm`

Wrap an existing adapter as an SLM package.

```bash
slmcortex package-slm \
  --slm-id python_slm \
  --name "Python Slm" \
  --adapter-dir artifacts/adapters/python_slm \
  --train-dataset tests/fixtures/slmcortex_demo/train.jsonl \
  --eval-dataset tests/fixtures/slmcortex_demo/eval.jsonl \
  --eval-summary tests/fixtures/slmcortex_demo/eval-summary.json \
  --output /tmp/slmcortex-demo/python_slm
```

### `validate-slm-package`

Verify package structure, checksums, and protected inputs.

```bash
slmcortex validate-slm-package --path slms/python_slm
```

### `compose-slms`

Compose validated packages into one deterministic runtime bundle.

```bash
slmcortex compose-slms \
  --slms /tmp/slmcortex-demo/python_slm,/tmp/slmcortex-demo/debugging_slm \
  --output /tmp/slmcortex-demo/runtime
```

### `validate-runtime`

Check a runtime bundle before inference or serving.

```bash
slmcortex validate-runtime --runtime /tmp/slmcortex-demo/runtime
```

### `route`

Inspect which packages match a task without loading adapters.

```bash
slmcortex route \
  --slms-dir slms \
  --repo . \
  --task "Create a FastAPI endpoint" \
  --explain
```

## What To Read Next

- [Quickstart](../getting-started/quickstart.md)
- [Packaged Install](../getting-started/packaged-install.md)
- [Local Coding Agent Setup](../getting-started/local-coding-agent-setup.md)
