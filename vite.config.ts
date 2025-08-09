import { defineConfig } from 'vite'
import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'
import react from '@vitejs/plugin-react'
import adonisjs from '@adonisjs/vite/client'
import tailwindcss from '@tailwindcss/vite'
import { codeInspectorPlugin } from 'code-inspector-plugin'

export default defineConfig({
  plugins: [
    inertia({ ssr: { enabled: false } }),
    react(),
    adonisjs({
      entrypoints: ['resources/js/app/app.tsx', 'resources/css/app.css'],
      reload: ['resources/views/**/*.edge'],
    }),
    tailwindcss(),
    codeInspectorPlugin({
      bundler: 'vite',
    }),
  ],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '@': `${getDirname(import.meta.url)}/resources/js/`,
    },
  },
})
