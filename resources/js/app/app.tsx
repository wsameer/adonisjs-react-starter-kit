/// <reference path="../../../adonisrc.ts" />
/// <reference path="../../../config/inertia.ts" />

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { AppWrapper } from '@/app/app-wrapper'

const appName = import.meta.env.VITE_APP_NAME || 'Starter Kit'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    createRoot(el).render(
      <StrictMode>
        <AppWrapper>
          <App {...props} />
        </AppWrapper>
      </StrictMode>
    )
  },

  progress: { color: '#5468FF' },
})
