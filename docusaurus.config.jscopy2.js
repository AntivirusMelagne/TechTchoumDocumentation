// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation Next.js',
  tagline: 'Apprendre Next.js étape par étape 🚀',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://thetchoumconsulting.com/', // 👉 remplace par ton vrai domaine ou GitHub Pages
  baseUrl: '/TechTchoumDocumentation/',

  organizationName: 'AntivirusMelagne', // 👉 remplace par ton compte GitHub
  projectName: 'TechTchoumDocumentation', // 👉 remplace par ton repo

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/AntivirusMelagne/TechTchoumDocumentation/tree/main/',
        },
        blog: false, // 👉 désactive le blog si tu n’en veux pas
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Next.js Docs',
      logo: {
        alt: 'Logo Next.js',
        src: 'img/TTClogo.png', // 👉 change si tu as ton propre logo
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/AntivirusMelagne/TechTchoumDocumentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Ressources',
          items: [
            {
              label: 'Site officiel Next.js',
              href: 'https://nextjs.org/docs',
            },
            {
              label: 'Vercel',
              href: 'https://vercel.com',
            },
          ],
        },
        {
          title: 'Suivez-moi',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/AntivirusMelagne/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ma Documentation Next.js. Fait avec ❤️ et Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
