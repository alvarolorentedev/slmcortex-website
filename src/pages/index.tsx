import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const githubUrl = 'https://github.com/alvarolorentedev/crazy-coding-llm';

type Item = {
  title: string;
  text: string;
};

type CompareItem = {
  problem: string;
  approach: string;
};

const workflow: Item[] = [
  {
    title: 'Package one capability',
    text: 'Wrap a focused LoRA adapter as a reusable SLM package with provenance, checksums, and routing metadata.',
  },
  {
    title: 'Compose one runtime',
    text: 'Combine validated SLM packages into a deterministic runtime bundle without mutating the source packages.',
  },
  {
    title: 'Validate before trust',
    text: 'Check package and runtime structure before inference, serving, or agent behavior touches a local repository.',
  },
  {
    title: 'Run the same core everywhere',
    text: 'Use Runtime Core for dry-run routing, local inference, the compatibility server, and bounded agent runs.',
  },
];

const comparisons: CompareItem[] = [
  {
    problem: 'Paid LLM services can turn every coding workflow into a metered remote dependency.',
    approach: 'SLMCortex keeps focused coding capabilities local, packaged, and inspectable before they run.',
  },
  {
    problem: 'One large general model is often asked to do jobs that are narrow, repetitive, and expensive to validate.',
    approach: 'SLMCortex packages smaller task-shaped capabilities and composes them into one runtime bundle.',
  },
  {
    problem: 'Tooling teams often need proof that routing and control flow work before they take on real backend complexity.',
    approach: 'Start with dry-run validation, then move to local inference only when your backend and model setup are ready.',
  },
];

const proof: Item[] = [
  {
    title: 'Homebrew install',
    text: 'macOS and Linux users can start with the Homebrew tap instead of cloning the source repo first.',
  },
  {
    title: 'No-model demo',
    text: 'Checks package, compose, validate, infer, and agent flow without downloading weights.',
  },
  {
    title: 'Composer-first path',
    text: 'Use doctor and compose-folder when you want the product-style install and folder-to-runtime flow.',
  },
  {
    title: 'Backend choices',
    text: 'MLX is used on Apple Silicon; GGUF covers Linux, Windows, macOS Intel, and explicit GGUF use.',
  },
  {
    title: 'Bounded agent',
    text: 'The current agent is local and single-run, with writes controlled by flags rather than hidden background behavior.',
  },
];

const docs: Item[] = [
  {
    title: 'Quickstart',
    text: 'Start with the smallest end-to-end path and verify the runtime on your machine.',
  },
  {
    title: 'Packaged Install',
    text: 'Use the Composer-first install flow with doctor, compose-folder, and the external workspace contract.',
  },
  {
    title: 'Command Reference',
    text: 'See the public CLI surface for packaging, composition, inference, serving, and agent work.',
  },
  {
    title: 'Architecture',
    text: 'Understand Factory, Composer, Runtime Core, and Agent Runtime without reading the source first.',
  },
];

const boundaries = [
  'Local, single-run execution only.',
  'Bounded tool loop, not a full IDE agent.',
  'Real inference requires local backend and model setup.',
  'The compatibility server is intentionally minimal and non-streaming.',
];

function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={clsx(styles.section, className)}>{children}</section>;
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Local SLM engine for focused coding workflows"
      description="SLMCortex packages focused LoRA capabilities, composes them into local runtimes, validates them before use, and runs bounded coding workflows on top.">
      <main>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1>Package focused coding capabilities. Compose a local runtime. Validate before trust.</h1>
              <p>
                SLMCortex turns LoRA adapters into reusable SLM packages, composes
                them into a deterministic runtime bundle, and uses the same runtime
                for dry-run validation, local inference, a compatibility server, and
                bounded repository work.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryAction} to="/docs/getting-started/quickstart">
                  Start with quickstart
                </Link>
                <Link className={styles.secondaryAction} href={githubUrl}>
                  View on GitHub
                </Link>
                <Link className={styles.textAction} to="/docs/getting-started/packaged-install">
                  See packaged install
                </Link>
              </div>
            </div>

            <div className={styles.heroPanel} aria-label="SLMCortex product flow">
              <div className={styles.panelHeader}>
                <span>public path</span>
                <strong>dry run first</strong>
              </div>
              <pre>{`$ python -m slmcortex doctor
$ brew install alvarolorentedev/SLMCortex/slmcortex
$ slmcortex doctor

inspect workspace
check backends
compose-folder --help

source checkout fallback:
  python scripts/run_slmcortex_demo.py`}</pre>
            </div>
          </div>
        </header>

        <Section className={styles.intro}>
          <div className={styles.statement}>
            <strong>The package is the unit of distribution.</strong>
            <strong>The runtime bundle is the unit of deployment.</strong>
            <strong>The runtime is the unit of execution.</strong>
          </div>
        </Section>

        <Section>
          <div className={styles.sectionHeader}>
            <h2>One explicit path from small brain to local engine</h2>
            <p>
              Visitors should be able to understand the product without reading the
              source. The core flow is package, compose, validate, then run.
            </p>
          </div>
          <div className={styles.workflow}>
            {workflow.map((item, index) => (
              <article className={styles.workflowItem} key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section className={styles.compareBand}>
          <div className={styles.sectionHeader}>
            <h2>Why teams reach for this instead of another hosted handler</h2>
            <p>
              The pitch is not "bigger models." The pitch is clearer boundaries:
              local artifacts, explicit runtime assembly, and dry-run validation
              before you spend time on real backend setup.
            </p>
          </div>
          <div className={styles.compareGrid}>
            {comparisons.map((item) => (
              <article className={styles.compareItem} key={item.problem}>
                <div>
                  <span>Common friction</span>
                  <p>{item.problem}</p>
                </div>
                <div>
                  <span>SLMCortex path</span>
                  <p>{item.approach}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className={styles.proofHeader}>
            <div className={styles.sectionHeader}>
              <h2>Proof you can inspect today</h2>
              <p>
                Start with dry-run validation. Move to real model-backed inference
                only when your local backend and model setup are ready.
              </p>
            </div>
            <Link className={styles.inlineCta} to="/docs/reference/command-reference">
              See CLI commands
            </Link>
          </div>
          <div className={styles.proofGrid}>
            {proof.map((item) => (
              <article className={styles.proofCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section className={styles.boundaries}>
          <div className={styles.boundaryCopy}>
            <h2>Honest v0.1 boundaries</h2>
            <p>
              SLMCortex is easiest to evaluate because its limits are visible. The
              current release is a narrow local path, not a broad production-agent
              platform.
            </p>
          </div>
          <ul>
            {boundaries.map((boundary) => (
              <li key={boundary}>{boundary}</li>
            ))}
          </ul>
        </Section>

        <Section>
          <div className={styles.docsHeader}>
            <div className={styles.sectionHeader}>
              <h2>Choose the next technical path</h2>
              <p>Use the docs to verify the demo, understand the packaged flow, or inspect the runtime architecture.</p>
            </div>
            <Link className={styles.inlineCta} href={githubUrl}>
              Inspect source
            </Link>
          </div>
          <div className={styles.docsGrid}>
            {docs.map((card) => (
              <article className={styles.docCard} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </Section>
      </main>
    </Layout>
  );
}
