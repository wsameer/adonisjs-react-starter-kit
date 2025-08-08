import { type PropsWithChildren } from 'react'
import { usePage } from '@inertiajs/react'

import { type BreadcrumbItem as BreadcrumbItemType, type PageData } from '@/types'

import { SidebarProvider } from '../ui/sidebar'
import { AppSidebar } from '../navigation/app-sidebar'
import { AppContent } from '../common/app-content'
import { AppSidebarHeader } from '../navigation/app-sidebar-header'

export const PageLayout = ({
  children,
  breadcrumbs = [],
}: PropsWithChildren & { breadcrumbs?: BreadcrumbItemType[] }) => {
  const isOpen = usePage<PageData>().props.sidebarOpen

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
