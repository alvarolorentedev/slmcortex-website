---
title: Packaged Install
---

Use this guide when you want the product-style install flow instead of working
from a source checkout.

The packaged path is Composer-first:

1. install `slmcortex`
2. run `slmcortex doctor`
3. point it at a folder
4. compose a runtime
5. run or export the result

Advanced Factory commands still exist, but they are not the normal first-user
path.

## Recommended Installers

For macOS and Linux, the first install path should be Homebrew via
[`alvarolorentedev/homebrew-SLMCortex`](https://github.com/alvarolorentedev/homebrew-SLMCortex).

```bash
brew tap alvarolorentedev/SLMCortex
brew install slmcortex
slmcortex --help
slmcortex-composer --help
```

Or install directly from the tap:

```bash
brew install alvarolorentedev/SLMCortex/slmcortex
```

The tap works with Homebrew on macOS and Linuxbrew on Linux and installs the
base Composer-first CLI path. Optional runtime backends can be provisioned
after install from the CLI itself.

## Platform Notes

The source repo currently ships platform-specific installer scripts:

- macOS: `scripts/installers/install-slmcortex-macos.sh`
- Linux: `scripts/installers/install-slmcortex-linux.sh`
- Windows: `scripts/installers/install-slmcortex-windows.ps1`

The installed package exposes two launchers:

- `slmcortex` for the full CLI
- `slmcortex-composer` for the guided Composer app entry point

If you are writing docs or onboarding other users, prefer the Homebrew path on
macOS and Linux. Keep the repo installer scripts and source checkout path as
the lower-level fallback.

## Workspace Contract

The packaged app keeps state outside the repository you are composing.

Typical workspace folders:

- `state/` for local state and copied demo repos
- `packages/` for imported or authored SLM packages
- `runtimes/` for emitted runtime bundles
- `exports/` for handoff descriptors
- `logs/` for compose and diagnostics logs
- `diagnostics/` for doctor exports and support bundles

Inspect the resolved workspace at any time:

```bash
slmcortex doctor
slmcortex doctor --workspace /tmp/slmcortex-app
slmcortex doctor --export-support-bundle
slmcortex-composer --help
```

## Default Product Flow

Start with readiness checks:

```bash
slmcortex doctor
slmcortex compose-folder --help
```

Compose a runtime from one folder:

```bash
slmcortex compose-folder \
  --workspace /tmp/slmcortex-app \
  --folder /path/to/repo \
  --task "Create a FastAPI endpoint with request validation" \
  --export-descriptor /tmp/slmcortex-app/exports/repo.json
```

Or launch the guided Composer flow directly:

```bash
slmcortex-composer \
  --workspace /tmp/slmcortex-app \
  --folder /path/to/repo \
  --task "Create a FastAPI endpoint with request validation" \
  --outcome export_bundle \
  --export-logs
```

## Optional Runtime Provisioning

The base install is meant to stay usable even before real-model dependencies
are installed.

When you want actual local inference:

```bash
slmcortex provision-backend --backend mlx --dry-run
slmcortex provision-backend --backend gguf
```

- MLX is the Apple Silicon path.
- GGUF covers Linux, Windows, macOS Intel, and explicit GGUF use.

## What This Flow Is Good For

Use the packaged flow when you want:

- a product-style launcher instead of repo-relative commands
- a separate app workspace for packages and runtimes
- one-step folder scan, routing, composition, and export

Use the source quickstart when you want:

- the fastest developer validation path
- direct access to demo scripts and checked-in fixtures
- the full Factory and runtime surface from a checkout
