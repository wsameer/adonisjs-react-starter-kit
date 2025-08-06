import User from '#models/user'
import { createUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import { errors } from '@vinejs/vine'

export default class RegistersController {
  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
      // Validate request data
      const data = await request.validateUsing(createUserValidator)

      // Create user with validated data
      await User.create({
        name: data.name,
        email: data.email,
        password: data.password, // no need to hash as it's already done in User model
      })

      return response.ok({ success: true })
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
