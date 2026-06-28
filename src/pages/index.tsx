import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

type Card = {
  title: string;
  text: string;
};

const flow = ['Package', 'Compose', 'Validate', 'Run locally'];

const audiences: Card[] = [
  {
    title: 'Local model developers',
    text: 'Use MLX on Apple Silicon or GGUF elsewhere, with dry-run paths before model loading.',
  },
  {
    title: 'Open-source evaluators',
    text: 'Start with the checked-in no-model demo and inspect the full package-to-agent control flow.',
  },
  {
    title: 'Infrastructure teams',
    text: 'Ship deterministic runtime bundles with validation, routing metadata, and a bounded agent runner.',
  },
];

const docs: Card[] = [
  {
    title: 'Quickstart',
    text: 'Install SLMCortex and run the no-model demo.',
  },
  {
    title: 'Command Reference',
    text: 'See every public CLI command and its role.',
  },
  {
    title: 'Architecture',
    text: 'Understand Factory, Composer, Runtime Core, and Agent Runtime.',
  },
  {
    title: 'Package Contract',
    text: 'Review package files, metadata, validation, and runtime bundles.',
  },
];

function Section({children, className}: {children: ReactNode; className?: string}) {
  return <section className={clsx(styles.section, className)}>{children}</section>;
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Frontier-feeling local coding workflows"
      description="SLMCortex packages specialized SLM capabilities, composes deterministic runtime bundles, and runs local coding workflows.">
      <main>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1>Frontier-feeling local coding workflows</h1>
              <p>
                Package specialized SLM capabilities, compose deterministic runtime bundles,
                validate before execution, and run bounded local agent workflows.
              </p>
              <div className={styles.actions}>
                <Link className="button button--primary button--lg" to="/docs/getting-started/quickstart">
                  Run the no-model demo
                </Link>
                <Link className="button button--secondary button--lg" to="/docs/architecture/slm-factory">
                  Read the architecture
                </Link>
              </div>
            </div>
            <div className={styles.terminal} aria-label="SLMCortex product flow">
              <div className={styles.terminalBar}>
                <span />
                <span />
                <span />
              </div>
              <pre>{`$ slmcortex package-slm ...
$ slmcortex compose-slms ...
$ slmcortex validate-runtime ...
$ slmcortex agent run --dry-run

Package -> Runtime bundle -> Local workflow`}</pre>
            </div>
          </div>
        </header>

        <Section>
          <div className={styles.sectionHeader}>
            <h2>One path from capability to local runtime</h2>
            <p>The package is the unit of distribution. The runtime bundle is the unit of deployment.</p>
          </div>
          <div className={styles.flow}>
            {flow.map((item, index) => (
              <div className={styles.flowItem} key={item}>
                <span>{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </Section>

        <Section className={styles.band}>
          <div className={styles.sectionHeader}>
            <h2>Built for local evaluation and team infrastructure</h2>
            <p>Start small with dry-run validation, then move toward real model-backed local inference.</p>
          </div>
          <div className={styles.grid}>
            {audiences.map((card) => (
              <article className={styles.card} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className={styles.proof}>
            <strong>Python 3.11+</strong>
            <strong>No-model demo</strong>
            <strong>MLX on Apple Silicon</strong>
            <strong>GGUF elsewhere</strong>
            <strong>Minimal compatibility server</strong>
          </div>
        </Section>

        <Section>
          <div className={styles.sectionHeader}>
            <h2>Read next</h2>
            <p>Use the docs as the public guide to SLMCortex packages, bundles, and runtime behavior.</p>
          </div>
          <div className={styles.grid}>
            {docs.map((card) => (
              <article className={styles.card} key={card.title}>
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
