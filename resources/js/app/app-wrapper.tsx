import React from 'react'
import { AppProvider } from '@/app/provider'
import { ThemeProvider } from '@/features/theme/theme-provider'

interface AppWrapperProps {
  children: React.ReactNode
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <AppProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </AppProvider>
  )
}
