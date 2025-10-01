// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

// ⬇️ valeurs par défaut (GitHub Pages du dépôt actuel)
// Elles seront remplacées par les variables d'environnement dans le workflow
const siteUrl = process.env.SITE_URL ?? 'https://antivirusmelagne.github.io';
const baseUrl = process.env.BASE_URL ?? '/TechTchoumDocumentation/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation Next.js',
  tagline: 'Apprendre Next.js étape par étape 🚀',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  // ⬇️ rendu public : URL et baseUrl dynamiques
  url: siteUrl,
  baseUrl: baseUrl,

  // ⬇️ recommandé pour GitHub Pages (évite les redirections bizarres)
  trailingSlash: true,

  organizationName: 'AntivirusMelagne',   // compte GitHub
  projectName: 'TechTchoumDocumentation', // nom du dépôt

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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/AntivirusMelagne/TechTchoumDocumentation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Next.js Docs',
      logo: { alt: 'Logo Next.js', src: 'img/TTClogo.png' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentation' },
        { href: 'https://github.com/AntivirusMelagne/TechTchoumDocumentation', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [{ label: 'Introduction', to: '/docs/introduction' }],
        },
        {
          title: 'Ressources',
          items: [
            { label: 'Site officiel Next.js', href: 'https://nextjs.org/docs' },
            { label: 'Vercel', href: 'https://vercel.com' },
          ],
        },
        {
          title: 'Suivez-moi',
          items: [{ label: 'GitHub', href: 'https://github.com/AntivirusMelagne/' }],
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
