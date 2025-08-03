import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AdonisJS + React Starter Kit",
  description: "Production-ready monorepo for building fast web apps",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/getting-started' },
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Deployment', link: '/deployment' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wsameer/react-adonijs-starter-kit' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Sameer Waskar'
    }
  }
})
