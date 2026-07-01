---
title: Local Coding Agent Setup
---

Use this guide when you want SLMCortex to act as a local coding agent instead
of stopping at package composition or dry-run inference.

There are two practical paths:

- **Project-owned LoRAs:** initialize a project, download selected LoRAs, then
  run `serve` or `agent run`.
- **Adaptive prototype:** point the runtime at an SLM directory, optionally
  allow remote LoRAs, and let routing decide what to use.

Start with dry-run checks first. Real inference and real training are slower
and depend on local backend setup.

## 1. Install The Base Environment

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install --upgrade pip
pip install -e '.[test]'
```

Install one real-model backend only when you need it:

```bash
pip install -e '.[mlx]'   # macOS Apple Silicon
pip install -e '.[gguf]'  # Linux, Windows, macOS Intel, or explicit GGUF use
```

## 2. Verify The Safe Path First

Run the no-model demo:

```bash
python scripts/run_slmcortex_demo.py
```

That validates:

- package creation
- runtime composition
- runtime validation
- inference routing in `--dry-run`
- bounded agent flow in `--dry-run`

Do not skip this step. It is the fastest way to separate runtime problems from
model-backend problems.

## 3. Project-Owned LoRA Flow

From the project you want SLMCortex to work on:

```bash
slmcortex init
```

Edit `.slmcortex.yaml` and list only the Hugging Face LoRAs you want. Then:

```bash
slmcortex loras download fastapi
slmcortex serve
slmcortex agent run --task "Fix the failing API validation test"
```

Use this path when you want the project itself to declare the capabilities it
can use.

## 4. Adaptive Prototype Flow

Validate the adaptive branches in mock mode first:

```bash
python scripts/run_dynamic_adaptive_smoke.py
```

Then enable the prototype config:

```bash
export SLMCORTEX_BASE_CONFIG=src/slmcortex_resources/configs/prototype.yaml
```

Run the real adaptive smoke only after the mock path is healthy:

```bash
python scripts/run_dynamic_adaptive_smoke.py --real
```

## 5. Run Inference Before You Run The Agent

Inspect routing with `--dry-run` first:

```bash
python -m slmcortex infer \
  --slms-dir .slmcortex/prototype-slms \
  --prompt "Fix a FastAPI validation bug" \
  --allow-remote-loras \
  --dry-run
```

Then start the local API if the route looks sane:

```bash
python -m slmcortex serve \
  --slms-dir .slmcortex/prototype-slms \
  --allow-remote-loras \
  --dry-run
```

## 6. Point It At A Repository

When routing looks reasonable, use the bounded agent:

```bash
python -m slmcortex agent run \
  --slms-dir .slmcortex/prototype-slms \
  --repo /path/to/your/repo \
  --task "Fix the failing answer implementation."
```

Use `--write-mode confirm` when you want reviewable patch behavior instead of
direct writes.

## Current Limits

- the agent is local and single-run
- remote LoRA discovery is curated, not open-ended
- real training and inference depend on local models and backend tooling
- GGUF currently has tighter adapter limitations than the ideal long-term path
