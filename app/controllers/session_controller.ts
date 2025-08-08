import User from '#models/user'
import { errors } from '@adonisjs/auth'
import { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  /**
   * Show the login page.
   */
  async create({ inertia, auth }: HttpContext) {
    return inertia.render('auth/login', {
      canResetPassword: false,
      status: auth.isAuthenticated,
    })
  }

  /**
   * Handle an incoming authentication request.
   */
  async store({ request, auth, response, session }: HttpContext) {
    try {
      const { email, password } = request.only(['email', 'password'])

      // Verify credentials
      const user = await User.verifyCredentials(email, password)

      // Login user
      await auth.use('web').login(user, !!request.input('remember'))

      // Flash success message
      session.flash('success', 'Welcome back!')

      return response.redirect('/dashboard')
    } catch (error) {
      // Handle validation errors (automatically handled by Inertia)
      if (error instanceof errors.E_INVALID_CREDENTIALS) {
        // Flash error for Inertia
        session.flash('errors', {
          email: 'These credentials do not match our records.',
        })

        return response.redirect().back()
      }

      // Flash error for Inertia
      session.flash('errors', {
        email: 'These credentials do not match our records.',
      })

      response.redirect().back()
    }
  }

  /**
   * Logout user by deleting the authenticated session
   */
  async destroy({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    session.flash('success', 'You have been logged out')
    return response.redirect('/')
  }
}
