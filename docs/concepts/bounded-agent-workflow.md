---
title: Bounded Agent Workflow
---

Agent Runtime is the bounded local task runner layered on top of Runtime Core.

It inspects a repository, asks Runtime Core for a plan and patch proposal,
optionally materializes a file replacement, and can run one developer-supplied
validation command.

```bash
slmcortex agent run \
  --runtime runtime/debugging_bundle \
  --repo /path/to/local/repo \
  --task "Fix the failing answer implementation." \
  --dry-run
```

Boundaries in v0.1:

- local, single-run execution only
- bounded tool loop rather than a full IDE agent
- no background orchestration, long-lived memory, or distributed execution
- writes are controlled by `--writes` or `--write-mode`

Use `--dry-run` first to inspect routing and control flow without applying
changes.
