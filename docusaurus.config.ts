import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Latipe Documents',
  tagline: 'Website thương mại điện tử sử dụng kiến trúc Microservice',
  favicon: 'img/latipe.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'latipe-ec', // Usually your GitHub org/user name.
  projectName: 'latipe-ec', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Latipe Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Giới thiệu',
        },
        { to: '/docs/componets', label: 'Thành phần', position: 'left' },
        { to: '/docs/getting-started', label: 'Hướng dẫn', position: 'left' },
        {
          href: 'https://github.com/Latipe-EC',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Latipe EC Project',
          items: [
            {
              label: 'Dự án xây dựng wesite thương mại điện tử sử dụng kiến trúc Microservice cho Khóa luận tốt nghiệp. Thực hiện bởi nhóm sinh viên năm cuối trường Đại học Sư Phạm Kỹ Thuật TP.HCM', 
              to: '#',
            },
          ],
        },
        {
          title: 'Liên kết',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/Latipe-EC',
            },
            {
              label: 'Discord',
              href: '#',
            }
          ],
        },
        {
          title: 'Thành viên',
          items: [
            {
              label: 'Trần Tiến Đạt',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Hồ Thái',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Latipe Project, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
