import { PageLayout } from '@/components/layout/page-layout';
import { type BreadcrumbItem } from '@/types';
import { type SharedProps } from '@adonisjs/inertia/types';
import { Head, Link, router, usePage } from '@inertiajs/react'
import { LogOutIcon } from 'lucide-react'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

const Dashboard = () => {

  const page = usePage<SharedProps>();

  const handleLogout = () => {
    router.flushAll()
  }

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
  );

  return (
    <div>
      <h1>Dashboard</h1>
      <Link
        className="block w-full"
        method="post"
        href={'/logout'}
        as="button"
        onClick={handleLogout}
      >
        <LogOutIcon className="mr-2" />
        Log out
      </Link>
    </div>
  )
}

export default Dashboard
