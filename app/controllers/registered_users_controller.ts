import User from '#models/user'
import { createUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import { errors } from '@vinejs/vine'

export default class RegisteredUsersController {
  /**
   * Show the registration page.
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  /**
   * Handle an incoming registration request.
   */
  async store({ request, auth, response }: HttpContext) {
    try {
      // Validate request data
      const data = await request.validateUsing(createUserValidator)

      // Create user with validated data
      const user = await User.create({
        name: data.name,
        email: data.email,
        password: data.password, // no need to hash as it's already done in User model
      })

      // Login user
      await auth.use('web').login(user, !!request.input('remember_me'))

      return response.redirect().toRoute('dashboard')
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        return response.badRequest({
          status: 'error',
          errors: error.messages,
          message: 'Validation failed',
        })
      }

      // Handle unexpected errors
      return response.internalServerError({
        status: 'error',
        message: 'Something went wrong',
      })
    }
  }
}
