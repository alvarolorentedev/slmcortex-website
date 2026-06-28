# SLMCortex Docusaurus Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Docusaurus website with a custom SLMCortex landing page and polished public docs.

**Architecture:** Use Docusaurus as the whole site: `/` for the homepage and `/docs/...` for documentation. Source content comes from `/Users/alvarolorente/workspace/crazy-coding-llm`; the website repo owns the polished copy.

**Tech Stack:** Docusaurus, React, TypeScript, CSS modules, Markdown.

---

## File Structure

- Create `package.json`, `docusaurus.config.ts`, `sidebars.ts`, `tsconfig.json`, `babel.config.js`: Docusaurus project config.
- Create `src/pages/index.tsx` and `src/pages/index.module.css`: custom homepage.
- Create `src/css/custom.css`: small theme overrides.
- Create `docs/*.md` and nested docs pages: polished public documentation.
- Modify `.gitignore`: ignore Docusaurus build outputs and visual companion scratch files.

### Task 1: Scaffold Docusaurus

**Files:**
- Create: `package.json`
- Create: `docusaurus.config.ts`
- Create: `sidebars.ts`
- Create: `tsconfig.json`
- Create: `babel.config.js`
- Create: `.gitignore`

- [ ] **Step 1: Add minimal Docusaurus config**

Create the config files using `@docusaurus/core`, `@docusaurus/preset-classic`, React, TypeScript, and a manual docs sidebar.

- [ ] **Step 2: Install dependencies**

Run: `npm install`

Expected: `package-lock.json` is created.

### Task 2: Add Homepage

**Files:**
- Create: `src/pages/index.tsx`
- Create: `src/pages/index.module.css`
- Create: `src/css/custom.css`

- [ ] **Step 1: Build the homepage**

Create a landing page with hero, product flow, audience paths, proof points, and docs entry cards. Use Docusaurus links and local CSS only.

- [ ] **Step 2: Keep claims grounded**

Use only claims from the approved design spec and source repo README/docs.

### Task 3: Add Polished Docs

**Files:**
- Create: `docs/intro.md`
- Create: `docs/getting-started/quickstart.md`
- Create: `docs/getting-started/install-and-backends.md`
- Create: `docs/getting-started/no-model-demo.md`
- Create: `docs/concepts/slm-packages.md`
- Create: `docs/concepts/runtime-bundles.md`
- Create: `docs/concepts/routing-and-validation.md`
- Create: `docs/concepts/bounded-agent-workflow.md`
- Create: `docs/architecture/slm-factory.md`
- Create: `docs/architecture/slm-composer.md`
- Create: `docs/architecture/runtime-core.md`
- Create: `docs/architecture/agent-runtime.md`
- Create: `docs/reference/command-reference.md`
- Create: `docs/reference/slm-package-contract.md`
- Create: `docs/reference/repo-boundary-map.md`
- Create: `docs/releases/v0.1.0.md`

- [ ] **Step 1: Copy and rewrite source docs**

Create public-facing docs from `/Users/alvarolorente/workspace/crazy-coding-llm/README.md` and `/Users/alvarolorente/workspace/crazy-coding-llm/docs/`.

- [ ] **Step 2: Wire sidebar order**

Update `sidebars.ts` so docs appear in this order: Getting Started, Concepts, Architecture, Reference, Releases.

### Task 4: Validate

**Files:**
- Modify only files created above if validation finds a build issue.

- [ ] **Step 1: Run build**

Run: `npm run build`

Expected: Docusaurus production build succeeds.

- [ ] **Step 2: Check git status**

Run: `git status --short`

Expected: implementation files are modified or untracked; `.superpowers/` remains ignored.
