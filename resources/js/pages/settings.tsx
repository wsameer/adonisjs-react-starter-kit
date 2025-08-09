import { LOGIN_ROUTE } from '@/app/routes'
import { PageLayout } from '@/components/layout/page-layout'
import { type BreadcrumbItem, type PageProps } from '@/types'
import { router } from '@inertiajs/react'

const breadcrumbs: BreadcrumbItem[] = [
  { id: 1, title: 'Building Your Application', href: '#' },
  {
    id: 2,
    title: 'Settings',
    href: '/settings',
  },
]

export const Settings = ({ auth }: PageProps) => {
  if (!auth) {
    router.push({ url: LOGIN_ROUTE })
  }

  return (
    <PageLayout breadcrumbs={breadcrumbs} pageTitle="Settings">
      <div>Settings</div>
    </PageLayout>
  )
}

export default Settings
