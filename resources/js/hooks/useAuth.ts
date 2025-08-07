import { LOGIN_API, LOGOUT_API } from '@/lib/constants'
import { type AuthData } from '@/types/types'
import { type SharedProps } from '@adonisjs/inertia/types'
import { router, usePage } from '@inertiajs/react'
import { toast } from 'sonner'

export const useAuth = () => {
  const {
    props: { auth },
  } = usePage<SharedProps>()

  const { user, isAuthenticated } = auth as AuthData

  function showErrorToast(
    title = 'Uh oh! Something went wrong.',
    description = 'There was a problem with your request.'
  ) {
    toast.error(title, {
      description,
    })
  }

  function loginUser(email: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      router.post(
        LOGIN_API,
        { email, password },
        {
          onSuccess: () => resolve(true),
          onError: (errors) => {
            console.log('🚀 ~ loginUser ~ errors:', errors)
            // Handle errors based on your backend response
            const errorMessage = errors.message || 'Invalid credentials'
            showErrorToast('Login Failed', errorMessage)
            resolve(false)
          },
        }
      )
    })
  }

  async function registerUser() {
    // todo
  }

  function logoutUser(): void {
    router.delete(LOGOUT_API)
  }

  return {
    user,
    isAuthenticated,
    login: loginUser,
    register: registerUser,
    logout: logoutUser,
  }
}
