import { usePage } from '@inertiajs/react'
import { type PropsWithChildren } from 'react'

import { type SharedProps, type BreadcrumbItem as BreadcrumbItemType } from '@/types'

import { AppContent } from '../common/app-content'
import { AppSidebar } from '../navigation/app-sidebar'
import { AppSidebarHeader } from '../navigation/app-sidebar-header'
import { SidebarProvider } from '../ui/sidebar'

export const PageLayout = ({
  children,
  breadcrumbs = [],
}: PropsWithChildren & { breadcrumbs?: BreadcrumbItemType[] }) => {
  const isOpen = usePage<SharedProps>().props.sidebarOpen

  return (
    <SidebarProvider defaultOpen={isOpen}>
      <AppSidebar />
      <AppContent variant="sidebar" className="overflow-x-hidden">
        <AppSidebarHeader breadcrumbs={breadcrumbs} />
        {children}
      </AppContent>
    </SidebarProvider>
  )
}
