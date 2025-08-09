import { HomeIcon } from 'lucide-react'
import { Link } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { APP_ROUTE } from '@/app/routes'

export const NotFoundRoute = () => {
  return (
    <div className="mt-52 flex flex-col items-center">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">404</h3>
      <p className="mb-6 leading-7 [&:not(:first-child)]:mt-6">This page doesn't exist</p>
      <Button className="h-12 rounded-full" variant="default" asChild>
        <Link href={APP_ROUTE} className="flex items-center" replace>
          <HomeIcon className="h-4 w-4" />
          Go to Home
        </Link>
      </Button>
    </div>
  )
}
