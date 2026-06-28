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
    title: 'Package a small brain',
    text: 'Wrap a focused LoRA adapter with provenance, protected inputs, evaluation data, fingerprints, and routing metadata.',
  },
  {
    title: 'Compose the engine',
    text: 'Combine validated SLM packages into an extensible runtime bundle without mutating the source assets.',
  },
  {
    title: 'Validate before running',
    text: 'Check package and runtime structure before inference, serving, or agent behavior touches a local repository.',
  },
  {
    title: 'Serve locally',
    text: 'Use the same Runtime Core for dry-run routing, model-backed inference, a compatibility server, and bounded agent runs.',
  },
];

const comparisons: CompareItem[] = [
  {
    problem: 'Paid LLM services can turn every coding workflow into a metered remote dependency.',
    approach: 'SLMCortex keeps focused SLM capabilities local, packaged, and inspectable before they run.',
  },
  {
    problem: 'One large general model is often used where a smaller, focused capability would be enough.',
    approach: 'Compose small brains into a runtime bundle and extend the engine one capability at a time.',
  },
  {
    problem: 'Hosted API bills can climb before the workflow is even proven reliable.',
    approach: 'Start with dry-run validation, then move to local inference when your backend and model setup are ready.',
  },
];

const proof: Item[] = [
  {
    title: 'Python 3.11+',
    text: 'The documented setup starts from a standard virtual environment and editable install.',
  },
  {
    title: 'No-model demo',
    text: 'Packages checked-in adapters, composes a runtime, validates it, and runs dry-run inference and agent flow.',
  },
  {
    title: 'Backend choices',
    text: 'MLX is used on Apple Silicon; GGUF covers Linux, Windows, macOS Intel, and explicit GGUF use.',
  },
  {
    title: 'Minimal server',
    text: 'A non-streaming OpenAI-compatible compatibility server is available for local runtime experiments.',
  },
  {
    title: 'Bounded agent',
    text: 'The v0.1 agent is local and single-run, with writes controlled by flags rather than hidden background behavior.',
  },
];

const docs: Item[] = [
  {
    title: 'Quickstart',
    text: 'Install SLMCortex and run the fastest no-model validation path.',
  },
  {
    title: 'Command Reference',
    text: 'See the packaging, routing, runtime, serving, and agent commands.',
  },
  {
    title: 'Architecture',
    text: 'Understand Factory, Composer, Runtime Core, and Agent Runtime.',
  },
];

const boundaries = [
  'Local, single-run execution only.',
  'Bounded tool loop, not a full IDE agent.',
  'Real inference requires local backend and model setup.',
  'No benchmark, model-quality, or production-readiness claims.',
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
      description="SLMCortex is a composable local SLM engine for focused, extensible coding capabilities without hosted LLM service bills.">
      <main>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1>The local SLM engine alternative to LLM service handlers.</h1>
              <p>
                SLMCortex lets you compose focused small brains into an extensible local
                runtime, validate them before execution, and avoid turning every coding
                workflow into a hosted LLM bill.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryAction} to="/docs/getting-started/quickstart">
                  Run the no-model demo
                </Link>
                <Link className={styles.secondaryAction} href={githubUrl}>
                  View on GitHub
                </Link>
                <Link className={styles.textAction} to="/docs/architecture/slm-factory">
                  Read the architecture
                </Link>
              </div>
            </div>

            <div className={styles.heroPanel} aria-label="SLMCortex product flow">
              <div className={styles.panelHeader}>
                <span>slmcortex demo</span>
                <strong>dry run first</strong>
              </div>
              <pre>{`$ python scripts/run_slmcortex_demo.py

package python_slm
package debugging_slm
compose runtime/
validate-runtime runtime/
infer --dry-run
agent run --dry-run

outputs:
  python_slm/
  debugging_slm/
  runtime/
  agent-trace.json`}</pre>
            </div>
          </div>
        </header>

        <Section className={styles.intro}>
          <div className={styles.statement}>
            <strong>The package is the unit of distribution.</strong>
            <strong>The engine is composed from focused SLMs.</strong>
            <strong>The runtime stays local and inspectable.</strong>
          </div>
        </Section>

        <Section>
          <div className={styles.sectionHeader}>
            <h2>One explicit path from small brain to local engine</h2>
            <p>
              The landing path mirrors the actual product path in the source repo: package
              focused capabilities, compose a runtime bundle, validate it, then serve
              local inference or run the bounded agent workflow.
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
            <h2>Why this beats another hosted handler</h2>
            <p>
              The point is not to claim better models. The point is to make local coding
              capabilities cheaper to evaluate, easier to inspect, and reliable enough to
              run through bounded control flow.
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
                Start with dry-run validation. Move to real model-backed inference only
                when your local backend and model setup are ready.
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
              SLMCortex is useful to evaluate because its limits are visible. The current
              release is a narrow local path, not a broad production-agent platform.
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
              <p>Use the docs to verify the demo, inspect commands, or read the runtime architecture.</p>
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
