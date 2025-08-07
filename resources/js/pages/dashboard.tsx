import { Link, router } from '@inertiajs/react'
import { LogOutIcon } from 'lucide-react'

const Dashboard = () => {
  const handleLogout = () => {
    router.flushAll()
  }

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
