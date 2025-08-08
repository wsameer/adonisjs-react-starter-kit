import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "AdonisJS + React Starter Kit",
  description: "Production-ready monorepo for building fast web apps",
  

  base: '/adonisjs-react-starter-kit/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/intro' },
    ],

    sidebar: [
      {
        text: 'Introduction',
         items: [
          { text: 'Overview', link: '/intro' },
          { text: 'What\'s Included', link: '/whats-included' },
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/get-started/installation' },
          { text: 'Directory Structure', link: '/get-started/directory-structure' },
          { text: 'Development Workflow', link: '/get-started/development-workflow' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Share Data', link: '/guide/share-data' },
          // { text: 'Database Setup', link: '/guide/database' },
          // { text: 'Authentication', link: '/guide/authentication' }
        ]
      },
      {
        text: 'Deployment',
        items: [
          { text: 'Overview', link: '/deployment' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wsameer/react-adonijs-starter-kit' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Made with ❤️ by <a href="https://github.com/wsameer" target="_blank">Sam</a>'
    }
  }
})
