// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking.
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // Site basic info
  title: 'Pandemic Response Institute', // Use your desired title here
  tagline: 'New York City’s Whole-of-Society’s Response to COVID-19',
  favicon: 'img/logo-pri.png',

  // Deployment settings for GitHub Pages
  url: 'https://ameliahuang325.github.io', // Your GitHub Pages URL
  baseUrl: '/PRI-StoryMap/',                // Base URL for your repo
  organizationName: 'AmeliaHuang325',        // Your GitHub username
  projectName: 'PRI-StoryMap',               // Your repository name
  trailingSlash: false,

  // Handling broken links
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization configuration
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Presets configuration
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/AmeliaHuang325/PRI-StoryMap/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/AmeliaHuang325/PRI-StoryMap/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // Theme configuration
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'PRI Project',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-pri.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Recommendation List',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/AmeliaHuang325/PRI-StoryMap',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        /* links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AmeliaHuang325/PRI-StoryMap',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} Shuyang Huang`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

/* $env:GIT_USER = "AmeliaHuang325"
npm run deploy */