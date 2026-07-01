import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SLMCortex',
  tagline: 'Composable local SLM engine for focused coding workflows',
  favicon: 'img/favicon.ico',
  url: 'https://slmcortex.dev',
  baseUrl: '/',
  organizationName: 'alvarolorentedev',
  projectName: 'slmcortex-website',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          exclude: ['superpowers/**'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/slmcortex-social-card.jpg',
    navbar: {
      title: 'SLMCortex',
      items: [
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {
          href: 'https://github.com/alvarolorentedev/crazy-coding-llm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Quickstart', to: '/docs/getting-started/quickstart'},
            {label: 'Packaged Install', to: '/docs/getting-started/packaged-install'},
            {label: 'Command Reference', to: '/docs/reference/command-reference'},
            {label: 'How It Works', to: '/docs/architecture/slm-factory'},
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/alvarolorentedev/crazy-coding-llm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SLMCortex.`,
    },
    prism: {
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
