# SLMCortex Docusaurus Site Design

Date: 2026-06-28

## Goal

Create a Docusaurus website for SLMCortex that presents the project as a way to build frontier-feeling local coding workflows from packaged SLM capabilities. The site should help first-time developers run the fastest local validation path and help teams understand the runtime architecture behind local coding-agent infrastructure.

## Source Material

Use `/Users/alvarolorente/workspace/crazy-coding-llm` as the content source:

- `README.md`
- `docs/README.md`
- `docs/user-guide/quickstart.md`
- `docs/user-guide/command-reference.md`
- `docs/architecture/slm-factory.md`
- `docs/architecture/slm-composer.md`
- `docs/architecture/runtime-core.md`
- `docs/architecture/agent-runtime.md`
- `docs/slm-package-contract.md`
- `docs/repo-boundary-map.md`
- `docs/releases/v0.1.0.md`

Do not add technical claims that are not supported by those files.

## Positioning

Primary message:

> Frontier-feeling local coding workflows, packaged for local runtime.

Supporting explanation:

SLMCortex is a package manager and runtime for AI coding capabilities. It packages specialized LoRA SLMs as self-describing artifacts, composes them into deterministic runtime bundles, validates those bundles before use, and runs local coding workflows on top of the same runtime core.

The homepage should prioritize:

- developers looking for strong local coding workflows
- open-source evaluators who want a fast no-model demo
- teams evaluating local coding-agent infrastructure

## Homepage

Build a custom Docusaurus homepage at `/`.

Sections:

1. Hero
   - Headline: `Frontier-feeling local coding workflows`
   - Supporting copy: package specialized SLM capabilities, compose deterministic runtime bundles, validate before execution, and run bounded local agent workflows.
   - Primary CTA: `Run the no-model demo`
   - Secondary CTA: `Read the architecture`

2. Product flow
   - Show `Package -> Compose -> Validate -> Run locally`.
   - Explain the package, runtime bundle, and runtime execution units.

3. Audience paths
   - Local model developers: MLX on Apple Silicon, GGUF elsewhere.
   - Open-source evaluators: no-model demo with checked-in fixtures.
   - Teams: deterministic bundles, validation, compatibility server, bounded agent runtime.

4. Proof points
   - Python 3.11+.
   - No-model demo avoids model downloads and weight loading.
   - Real inference is supported with MLX on Apple Silicon and GGUF on supported platforms.
   - Compatibility server is minimal and non-streaming.

5. Documentation entry cards
   - Quickstart
   - Command Reference
   - Architecture
   - SLM Package Contract

## Documentation

Use Docusaurus docs under `/docs`.

Structure:

- Getting Started
  - Quickstart
  - Install and backend guidance
  - No-model demo
- Concepts
  - SLM packages
  - Runtime bundles
  - Routing and validation
  - Bounded agent workflow
- Architecture
  - SLM Factory
  - SLM Composer
  - Runtime Core
  - Agent Runtime
- Reference
  - Command Reference
  - SLM Package Contract
  - Repo Boundary Map
- Releases
  - v0.1.0

Rewrite the existing docs for public readability while preserving their technical meaning. Do not mirror the source docs verbatim unless the current wording is already clear.

## Implementation Shape

Use Docusaurus as the whole site:

- homepage at `/`
- documentation at `/docs/...`
- one manually ordered sidebar
- navbar links for Docs and GitHub
- footer links for core docs

Use Docusaurus theme components and local CSS only. Do not add another UI library.

## Out of Scope

Skip these for the first version:

- generated API docs
- live runnable website demos
- benchmark or model-quality claims
- blog
- versioned docs
- new source-repo behavior or CLI changes

Add those later only when the source repo has stable API documentation, benchmark results, or release cadence.

## Validation

Run the light Docusaurus build check after implementation.

Do not run training, model inference, demos, benchmark scripts, or repeated validation loops as part of website implementation.
