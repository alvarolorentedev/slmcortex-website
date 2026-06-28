---
title: Runtime Bundles
---

A runtime bundle is the unit of deployment.

`compose-slms` loads validated SLM packages, checks compatibility, derives
routes, and writes a deterministic bundle that Runtime Core can consume
directly.

```bash
slmcortex compose-slms \
  --slms slms/python_slm,slms/debugging_slm \
  --strategy routed \
  --output runtime/debugging_bundle
```

Bundle layout:

```text
runtime/debugging_bundle/
├── composition.yaml
├── router_config.json
├── active_slms.json
├── compatibility_report.json
├── budget_report.json
├── checksums.json
└── README.md
```

The bundle is validated before inference or serving:

```bash
slmcortex validate-runtime --runtime runtime/debugging_bundle
```

Composition does not mutate source packages, adapters, datasets, registries, or
benchmark artifacts.
