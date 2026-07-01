---
title: SLMCortex Docs
slug: /intro
---

SLMCortex is a package manager and runtime for local AI coding capabilities.

It gives you one explicit path:

1. package or import focused LoRA adapters as reusable SLM packages
2. compose those packages into a runtime bundle
3. validate the runtime before you trust it
4. run local inference, serve an OpenAI-compatible API, or point a bounded agent at a repository

The goal is not "one giant model that does everything." The goal is a local,
inspectable runtime built from smaller, task-shaped capabilities.

## Start Here

If you are new to the project, use the shortest healthy path first:

```bash
brew tap alvarolorentedev/SLMCortex
brew install slmcortex
slmcortex --help
slmcortex doctor
```

On a source checkout, the deeper validation path is still the no-model demo:

```bash
python scripts/run_slmcortex_demo.py
```

That demo stays in dry-run mode. It verifies the product flow without
downloading model weights or running real inference.

## What Visitors Usually Want To Know

### What problem does it solve?

SLMCortex separates packaging, composition, runtime validation, and agent
execution so you can inspect each stage instead of trusting one opaque system.

### How does it work?

- **Slm Factory** packages one adapter and its provenance into an SLM artifact.
- **Slm Composer** combines compatible SLM packages into one runtime bundle.
- **Runtime Core** validates, routes, infers, and serves from that bundle.
- **Agent Runtime** uses the same runtime for bounded local repository work.

### What should I try first?

- [Quickstart](getting-started/quickstart.md)
- [Packaged Install](getting-started/packaged-install.md)
- [No-Model Demo](getting-started/no-model-demo.md)
- [Local Coding Agent Setup](getting-started/local-coding-agent-setup.md)

### Where do I go next?

- [Command Reference](reference/command-reference.md)
- [Slm Factory](architecture/slm-factory.md)
- [Slm Composer](architecture/slm-composer.md)
- [Runtime Core](architecture/runtime-core.md)
- [Agent Runtime](architecture/agent-runtime.md)
- [SLM Package Contract](reference/slm-package-contract.md)
