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
      await auth.use('web').login(
        user,
        /**
         * Generate token when "remember_me" input exists
         */
        !!request.input('remember_me')
      )

      // Flash success message
      session.flash('success', 'Welcome back!')

      // For API calls, return JSON
      if (request.header('X-Inertia')) {
        return response.redirect('/dashboard')
      }

      return response.ok({
        success: true,
        redirect: '/dashboard',
      })
    } catch (error) {
      if (error instanceof errors.E_INVALID_CREDENTIALS) {
        // Flash error for Inertia
        session.flash('error', 'These credentials do not match our records.')

        // Return appropriate response based on request type
        if (request.header('X-Inertia')) {
          return response.redirect().back()
        }

        return response.badRequest({
          status: 'error',
          message: 'These credentials do not match our records.',
        })
      }

      return response.internalServerError({
        status: 'error',
        message: 'Something went wrong',
      })
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
