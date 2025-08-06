import User from '#models/user'
import { errors } from '@adonisjs/auth'
import { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  /**
   * Handle form submission for login
   */
  async store({ request, auth, response, session }: HttpContext) {
    try {
      const { email, password } = request.only(['email', 'password'])

      // Verify credentials
      const user = await User.verifyCredentials(email, password)

      // Login user
      await auth.use('web').login(user)

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
        session.flash('error', 'Invalid email or password')

        // Return appropriate response based on request type
        if (request.header('X-Inertia')) {
          return response.redirect().back()
        }

        return response.badRequest({
          status: 'error',
          message: 'Invalid email or password',
        })
      }

      return response.internalServerError({
        status: 'error',
        message: 'Something went wrong',
      })
    }
  }

  /**
   * Logout user by deleting the session
   */
  async destroy({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    session.flash('success', 'You have been logged out')
    return response.redirect('/login')
  }
}
