---
title: Agent Runtime
---

Agent Runtime is the bounded local task runner layered on top of Runtime Core.

It inspects a repository, asks Runtime Core for routing and patch guidance,
optionally writes changes, and can run one developer-supplied validation
command.

## What It Does

- inspects a local repository with a small tool surface
- requests step-wise routing decisions from Runtime Core
- captures traces of selected SLMs, proposed changes, and validation results
- keeps writes scoped to the repository root and controlled by flags

## What Goes In

- a runtime bundle or `--slms-dir`
- a local repository path
- a task description
- optional validation and trace options

## What Comes Out

- one JSON result describing the run
- an optional trace file
- optional repository changes when writes are enabled

## Why It Matters

This is the part most visitors care about: can the same local runtime actually
do bounded coding work on a repository?

The answer in v0.1 is yes, but narrowly.

## Current Boundaries

- local, single-run execution only
- bounded tool loop, not a full IDE agent
- no background orchestration or long-lived memory
- dry-run validates control flow, not model quality
