import { Link } from '@inertiajs/react'
import { type PropsWithChildren } from 'react'
import { DASHBOARD_ROUTE } from '@/app/routes'
import { AppLogo } from '../common/app-logo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

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
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col gap-8">
          <div className="items-left flex flex-col gap-4">
            <Link
              href={DASHBOARD_ROUTE}
              className="flex items-center gap-2 self-center font-medium"
            >
              <header className="flex items-center justify-between">
                <AppLogo size="small" />
              </header>
              <span className="sr-only">App Name</span>
              <p>App Name</p>
            </Link>
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>{children}</CardContent>
              </Card>
              <div className="text-center text-xs text-balance text-muted-foreground *:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-primary">
                By clicking continue, you agree to our <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
