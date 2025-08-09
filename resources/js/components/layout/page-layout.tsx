import { Head, usePage } from '@inertiajs/react'
import { type PropsWithChildren } from 'react'

import { type SharedProps, type BreadcrumbItem as BreadcrumbItemType } from '@/types'
import { SidebarProvider } from '../ui/sidebar'
import { AppSidebar } from '../sidebar/app-sidebar'
import { AppSidebarHeader } from '../sidebar/app-sidebar-header'
import { AppContent } from '../common/app-content'

export const PageLayout = ({
  children,
  pageTitle,
  breadcrumbs = [],
}: PropsWithChildren & { pageTitle: string; breadcrumbs?: BreadcrumbItemType[] }) => {
  const isOpen = usePage<SharedProps>().props.sidebarOpen

  return (
    <SidebarProvider defaultOpen={isOpen}>
      <AppSidebar />
      <Head title={pageTitle} />
      <AppContent variant="sidebar">
        <AppSidebarHeader breadcrumbs={breadcrumbs} />
        {children}
      </AppContent>
    </SidebarProvider>
  )
}
