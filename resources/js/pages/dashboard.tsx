import { PageLayout } from '@/components/layout/page-layout'
import { type BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/react'

const breadcrumbs: BreadcrumbItem[] = [
  { id: 1, title: 'Building Your Application', href: '#' },
  {
    id: 2,
    title: 'Dashboard',
    href: '/dashboard',
  },
]

const Dashboard = () => {
  return (
    <PageLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </PageLayout>
  )
}

export default Dashboard
