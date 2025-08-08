import React, { type PropsWithChildren } from 'react'
import { SidebarInset } from '../ui/sidebar'

type Props = React.ComponentProps<'main'> & {
  variant?: 'header' | 'sidebar'
} & PropsWithChildren

export const AppContent = ({ variant = 'header', children, ...props }: Props) => {
  if (variant === 'sidebar') {
    return <SidebarInset {...props}>{children}</SidebarInset>
  }

  return (
    <main
      className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl"
      {...props}
    >
      {children}
    </main>
  )
}
