---
title: Command Reference
---

Use `slmcortex` or `python -m slmcortex`. Prefer `--dry-run` when you only want
to inspect routing, composition, serving startup, or agent behavior.

## Common conventions

- `generate-dataset`, `train-slm`, `package-slm`, and `compose-slms` are the packaging pipeline.
- `route`, `compose-from-route`, `infer`, `serve`, and `agent run` are the runtime pipeline.
- `infer` and `agent run` require exactly one of `--runtime` or `--slms-dir`.
- Backend selection comes from base config: `backend: auto | mlx | gguf`.
- `auto` resolves to MLX only on macOS Apple Silicon and GGUF elsewhere.
- GGUF requires a `.gguf` runtime model path. MLX is rejected outside macOS arm64/aarch64.

## Commands at a glance

| Command | Best for |
| --- | --- |
| `generate-dataset` | deterministic train/eval JSONL datasets |
| `validate-dataset` | schema and leakage checks |
| `train-slm` | turning datasets into a packaged SLM |
| `train-plasticity-lora` | on-demand local adapter training |
| `import-lora` | wrapping an external LoRA |
| `package-slm` | converting an existing adapter into a package |
| `validate-slm-package` | verifying package integrity |
| `compose-slms` | building a deterministic runtime bundle |
| `route` | inspecting which SLMs match a task |
| `compose-from-route` | routing plus one-shot runtime composition |
| `validate-runtime` | checking a bundle before use |
| `infer` | model-backed or dry-run inference |
| `serve` | OpenAI-compatible local API |
| `agent run` | bounded repo work on a local checkout |

## Packaging pipeline

```bash
slmcortex generate-dataset \
  --slm-id fastapi_contract \
  --domain fastapi \
  --report-output /tmp/fastapi_contract-report.json

slmcortex validate-dataset datasets/fastapi_contract/train.jsonl \
  --eval-dataset datasets/fastapi_contract/eval.jsonl

slmcortex train-slm \
  --slm-id fastapi_contract \
  --name "FastAPI Contract Slm" \
  --train-dataset datasets/fastapi_contract/train.jsonl \
  --eval-dataset datasets/fastapi_contract/eval.jsonl \
  --output slms/fastapi_contract
```

`train-slm` validates datasets before training and fails early on malformed or
leaky data. MLX training writes `adapter/adapters.safetensors`; GGUF training
writes `adapter/adapter.gguf` after PEFT training and llama.cpp conversion.

Package an existing adapter:

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

Import a Hugging Face LoRA:

```bash
slmcortex import-lora \
  --source hf://owner/repo \
  --slm-id fastapi_slm \
  --name "FastAPI Slm" \
  --output slms/fastapi_slm \
  --train-dataset data/train.jsonl \
  --eval-dataset data/eval.jsonl
```

## Runtime pipeline

```bash
slmcortex compose-slms \
  --slms /tmp/slmcortex-demo/python_slm,/tmp/slmcortex-demo/debugging_slm \
  --output /tmp/slmcortex-demo/runtime

slmcortex validate-runtime --runtime /tmp/slmcortex-demo/runtime

slmcortex infer \
  --runtime /tmp/slmcortex-demo/runtime \
  --prompt "Fix this Python traceback" \
  --dry-run
```

Route without composing:

```bash
slmcortex route \
  --slms-dir slms \
  --repo . \
  --task "Create a FastAPI endpoint" \
  --explain
```

Route and compose in one step:

```bash
slmcortex compose-from-route \
  --slms-dir slms \
  --repo . \
  --task "Create a FastAPI endpoint" \
  --runtime-out runtime/generated
```

## Serving

```bash
slmcortex serve --runtime /tmp/slmcortex-demo/runtime --host 127.0.0.1 --port 8000
```

Use `--dry-run` to validate serving configuration without starting the server.
The compatibility server is minimal and non-streaming.

## Agent run

```bash
slmcortex agent run \
  --runtime /tmp/slmcortex-demo/runtime \
  --repo /tmp/slmcortex-demo/toy-repo \
  --task "Fix the failing answer implementation." \
  --dry-run
```

`--slms-dir` mode only supports `--dry-run` or `--write-mode confirm`. Use
`--trace-out` to write the run trace JSON.
