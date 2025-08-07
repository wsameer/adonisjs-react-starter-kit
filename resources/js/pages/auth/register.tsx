import { InputError } from '@/components/common/input-error'
import TextLink from '@/components/common/text-link'
import { AuthLayout } from '@/components/layout/auth-layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { REGISTRATION_API } from '@/lib/constants'
import { Head, useForm } from '@inertiajs/react'
import { EyeIcon, EyeOffIcon, Github, LoaderCircle, ScanFaceIcon } from 'lucide-react'
import { useState } from 'react'

type RegisterForm = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    post(REGISTRATION_API, {
      onFinish: () => reset('password', 'password_confirmation'),
      onError: (errors) => {
        console.log('🚀 ~ handleSubmit ~ errors:', errors)
        console.log('Registration failed')
      },
    })
  }

  return (
    <AuthLayout
      title="Create an account"
      description="Enter your details below to create your account"
    >
      <Head title="Register" />

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-2">
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
            <InputError message={errors.name} className="mt-2" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email address</Label>
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
            <InputError message={errors.email} />
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
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </Button>
            </div>
            <InputError message={errors.password} />
          </div>

          <div className="grid gap-2">
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
            <InputError message={errors.password_confirmation} />
          </div>

          <Button
            type="submit"
            className="mt-4 h-12 w-full rounded-full text-base"
            tabIndex={4}
            disabled={processing}
          >
            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
            Create account
          </Button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-zinc-500">Or start with</span>
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
          <span>Already have an account?</span>
          <TextLink className="ml-1" href={'/login'}>
            Sign in
          </TextLink>
        </p>
      </div>
    </AuthLayout>
  )
}

export default Register
