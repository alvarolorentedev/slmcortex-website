---
title: Agent Runtime
---

Agent Runtime is the bounded local task runner layered on top of Runtime Core.

It inspects a repository, asks Runtime Core for a plan and patch proposal,
optionally materializes a file replacement, and can run one developer-supplied
validation command.

## Responsibilities

- inspect a local repository with a small tool surface
- request step-wise routing decisions from Runtime Core
- capture traces of selected SLMs, proposed changes, and validation results
- keep writes scoped to the repository root and controlled by `--writes`

## Inputs

- runtime bundle path
- local repository path
- task description
- optional validation command and trace output path

## Outputs

- one JSON result describing the agent run
- optional trace file with routing and tool activity
- optional repository file replacement when writes are enabled

The no-model demo uses `--dry-run` so developers can inspect the end-to-end
agent flow without model downloads.
