// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "365Support V2",
  tagline:
    "Recibe las señales en tiempo real de cualquier actividad de cualquier dispositivo y da una repuesta inmediata a cualquier eventualidad.",
  favicon: "img/365_logo.png",

  // Set the production url of your site here
  url: "https://help.365monitoreo.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "365SConnect", // Usually your GitHub org/user name.
  projectName: "365SupportV2", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      style: "dark",
      navbar: {
        title: "",
        logo: {
          alt: "365-manual",
          src: "img/365-manual.png",
          srcDark: "img/365-manual-dark.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "installConfigSidebar",
            position: "left",
            label: "Instalacion y Configuracion",
          },
          {
            type: "docSidebar",
            sidebarId: "manualAndFaqSidebar",
            position: "left",
            label: "Manual y FAQ",
          },
          {
            type: "docSidebar",
            sidebarId: "problemsSolutionSidebar",
            position: "left",
            label: "Solucion de Problemas",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "365Connect Pro",
                to: "/docs/manual-y-faq/365connectPro/inicio",
              },
              {
                label: "365Client",
                to: "/docs/manual-y-faq/apps-mobiles/365-client-app",
              },
              {
                label: "365Guard",
                to: "/docs/manual-y-faq/apps-mobiles/365-guard-app",
              },
              {
                label: "365SOS",
                to: "/docs/manual-y-faq/apps-mobiles/365-sos-app",
              },
            ],
          },
          {
            title: "Ayuda",
            items: [
              {
                label: "Preguntas Frecuentes",
                href: "/docs/manual-y-faq/faq/preguntas-frecuentes",
              },
            ],
          },
          {
            title: "Mas",
            items: [
              {
                label: "Cloud",
                to: "http://cloud.365monitoreo.com",
              },
              {
                label: "3Monitoreo",
                href: "https://365monitoreo.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
};

module.exports = config;
