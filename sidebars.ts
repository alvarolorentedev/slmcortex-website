import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/quickstart',
        'getting-started/install-and-backends',
        'getting-started/no-model-demo',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/slm-packages',
        'concepts/runtime-bundles',
        'concepts/routing-and-validation',
        'concepts/bounded-agent-workflow',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/slm-factory',
        'architecture/slm-composer',
        'architecture/runtime-core',
        'architecture/agent-runtime',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/command-reference',
        'reference/slm-package-contract',
        'reference/repo-boundary-map',
      ],
    },
    {
      type: 'category',
      label: 'Releases',
      items: ['releases/v0.1.0'],
    },
  ],
};

export default sidebars;
