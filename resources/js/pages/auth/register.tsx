import { DASHBOARD_ROUTE } from '@/app/routes'
import { InputError } from '@/components/common/input-error'
import { AuthLayout } from '@/components/layout/auth-layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { REGISTRATION_API } from '@/lib/constants'
import { type PageProps } from '@/types'
import { Head, router, useForm } from '@inertiajs/react'
import { EyeIcon, EyeOffIcon, LoaderCircle } from 'lucide-react'
import { useState } from 'react'

type RegisterForm = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const Register = ({ auth, errors }: PageProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const { data, setData, post, processing, reset } = useForm<Required<RegisterForm>>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  if (auth.isAuthenticated) {
    return router.push({ url: DASHBOARD_ROUTE })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    post(REGISTRATION_API, {
      onFinish: () => reset('password', 'password_confirmation'),
      onError: (_errors) => {
        // show a toast or send error to Sentry or log it to Firebase.
        // Whatever you prefer
      },
    })
  }

  return (
    <AuthLayout title="Create an account" description="Enter your details below to get started">
      <Head title="Register" />

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                required
                autoFocus
                tabIndex={1}
                autoComplete="name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                disabled={processing}
                placeholder="Full name"
              />
              <InputError message={errors?.name} className="mt-2" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                tabIndex={2}
                autoComplete="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                disabled={processing}
                placeholder="name@example.com"
              />
              <InputError message={errors?.email} />
            </div>

            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  tabIndex={2}
                  autoComplete="current-password"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={!data.password}
                  className="absolute top-0 right-0 h-full px-3 py-2 hover:cursor-pointer hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <InputError message={errors?.password} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="password_confirmation">Confirm password</Label>
              <Input
                id="password_confirmation"
                type="text"
                required
                tabIndex={4}
                autoComplete="new-password"
                value={data.password_confirmation}
                onChange={(e) => setData('password_confirmation', e.target.value)}
                disabled={processing}
                placeholder="Confirm password"
              />
              <InputError message={errors?.password_confirmation} />
            </div>

            <Button
              type="submit"
              className="mt-1 h-12 w-full rounded-full text-base"
              tabIndex={4}
              disabled={processing}
            >
              {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
              Create account
            </Button>
          </div>

          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-card px-2 text-muted-foreground">
              Or register with
            </span>
          </div>

          <div className="flex gap-4">
            <Button variant="secondary" size="icon" className="h-12 flex-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">Login with Google</span>
            </Button>
            <Button variant="secondary" size="icon" className="h-12 flex-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">Login with Apple</span>
            </Button>
          </div>

          <div className="text-center text-sm">
            Already have an account?{' '}
            <a href="/login" className="underline underline-offset-4">
              Sign in
            </a>
          </div>
        </div>
      </form>

      {status && (
        <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>
      )}
    </AuthLayout>
  )
}

export default Register
