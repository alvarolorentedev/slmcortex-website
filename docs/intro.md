---
title: SLMCortex Docs
slug: /intro
---

SLMCortex is a package manager and runtime for AI coding capabilities.

It packages specialized LoRA SLMs as self-describing artifacts, composes those
artifacts into deterministic runtime bundles, validates the bundle before use,
and runs local coding workflows on top of the same runtime core.

The shortest path is the no-model demo:

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install --upgrade pip
pip install -e '.[test]'
python scripts/run_slmcortex_demo.py
```

Read next:

- [Quickstart](getting-started/quickstart.md)
- [Command Reference](reference/command-reference.md)
- [Architecture](architecture/slm-factory.md)
- [SLM Package Contract](reference/slm-package-contract.md)
