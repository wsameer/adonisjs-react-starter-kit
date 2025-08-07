import { Link } from '@inertiajs/react'
import { type PropsWithChildren } from 'react'
import { BrandLogo } from '../common/brand-logo'
import { DASHBOARD_ROUTE } from '@/app/routes'

interface AuthLayoutProps {
  name?: string
  title?: string
  description?: string
}

export const AuthLayout = ({
  children,
  title,
  description,
}: PropsWithChildren<AuthLayoutProps>) => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-8">
          <div className="items-left flex flex-col gap-4">
            <Link href={DASHBOARD_ROUTE} className="mb-6 flex flex-col gap-2 font-medium">
              <header className="flex items-center justify-between">
                <BrandLogo size="large" />
              </header>
              <span className="sr-only">{title}</span>
            </Link>

            <div>
              <h1 className="text-4xl font-light text-zinc-900 dark:text-white">{title}</h1>
              <p className="mt-2 text-lg font-light text-zinc-400">{description}</p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
