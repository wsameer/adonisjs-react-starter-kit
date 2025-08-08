import { DASHBOARD_ROUTE } from '@/app/routes'
import { InputError } from '@/components/common/input-error'
import TextLink from '@/components/common/text-link'
import { AuthLayout } from '@/components/layout/auth-layout'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LOGIN_API } from '@/lib/constants'
import { type ValidationErrors } from '@/types'
import { type PageProps } from '@/types/inertia'
import { Head, router, useForm } from '@inertiajs/react'
import { EyeIcon, EyeOffIcon, Github, LoaderCircle, ScanFaceIcon } from 'lucide-react'
import { useState } from 'react'

type LoginForm = {
  email: string
  password: string
  remember: boolean
}

interface LoginProps extends PageProps {
  status?: string
  canResetPassword: boolean
}

const Login = ({ status, canResetPassword, auth, flash }: LoginProps) => {
  const { errors } = flash as { errors: ValidationErrors }

  const [showPassword, setShowPassword] = useState(false)
  const { data, setData, post, reset, processing } = useForm<Required<LoginForm>>({
    email: '',
    password: '',
    remember: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Direct Inertia form submission - cleanest approach
    post(LOGIN_API, {
      onFinish: () => reset('password'),
      onError: (_errors) => {
        // show a toast or send error to Sentry or log it to Firebase.
        // Whatever you prefer
      },
    })
  }

  if (auth.isAuthenticated) {
    return router.push({ url: DASHBOARD_ROUTE })
  }

  return (
    <AuthLayout title="Welcome back" description="Log in to your account">
      <Head title="Log in" />

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              required
              autoFocus
              tabIndex={1}
              autoComplete="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              placeholder="name@example.com"
            />
            <InputError message={errors?.email} />
          </div>
        </div>

        <div className="grid gap-2">
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
              placeholder="Password"
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
              {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </Button>
          </div>
          <InputError message={errors?.password} />
        </div>

        <div className="flex items-center justify-between space-x-3">
          <div className="flex flex-row items-center space-y-0 space-x-2">
            <Checkbox
              id="remember"
              name="remember"
              checked={data.remember}
              onClick={() => setData('remember', !data.remember)}
              tabIndex={3}
            />
            <Label className="text-sm font-normal" htmlFor="remember">
              Remember me
            </Label>
          </div>
          {canResetPassword && (
            <TextLink href={'password.request'} className="ml-auto text-sm" tabIndex={5}>
              Forgot password?
            </TextLink>
          )}
        </div>

        <Button
          type="submit"
          className="mt-4 h-12 w-full rounded-full text-base"
          tabIndex={4}
          disabled={processing}
        >
          {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
          Log in
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-zinc-500">Or continue with</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" size="icon" className="h-12 flex-1 rounded-full">
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </Button>
        <Button variant="outline" size="icon" className="h-12 flex-1 rounded-full">
          <ScanFaceIcon className="h-6 w-6" />
          <span className="sr-only">Face ID</span>
        </Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-foreground/80">
          <span>Don't have an account?</span>
          <TextLink className="ml-1" href={'/register'}>
            Sign up
          </TextLink>
        </p>
      </div>

      {status && (
        <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>
      )}
    </AuthLayout>
  )
}

export default Login
