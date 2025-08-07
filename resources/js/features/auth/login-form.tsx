import { InputError } from '@/components/common/input-error'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LOGIN_API } from '@/lib/constants'
import { type SharedProps } from '@adonisjs/inertia/types'
import { useForm, usePage } from '@inertiajs/react'
import * as z from 'zod'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const loginFormSchema = z.object({
  email: z.string().min(8, 'Email is required').email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  remember: z.boolean().default(false).optional(),
})

export type UserLoginParameters = z.infer<typeof loginFormSchema>

export const LoginForm = () => {
  const {
    props: { auth },
  } = usePage<SharedProps>()
  console.log('🚀 ~ useAuth ~ auth:', auth)

  const { data, setData, post, errors } =
    useForm <
    Required<UserLoginParameters>({
      email: '',
      password: '',
      remember: false,
    })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Direct Inertia form submission - cleanest approach
    post(LOGIN_API, {
      onError: (errors) => {
        console.log('🚀 ~ handleSubmit ~ errors:', errors)
        // Your SessionController will handle flash messages
        console.log('Login failed')
      },
    })
  }

  return (
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
            placeholder="email@example.com"
          />
          <InputError message={errors.email} />
        </div>
      </div>

      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          {canResetPassword && (
            <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={5}>
              Forgot password?
            </TextLink>
          )}
        </div>
        <Input
          id="password"
          type="password"
          required
          tabIndex={2}
          autoComplete="current-password"
          value={data.password}
          onChange={(e) => setData('password', e.target.value)}
          placeholder="Password"
        />
        <InputError message={errors.password} />
      </div>
    </form>
  )
}
