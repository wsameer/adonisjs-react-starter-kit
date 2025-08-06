import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class InertiaMiddleware {
  async handle({ auth, inertia }: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    inertia.share({
      auth: {
        user: auth.user ?? null,
        isAuthenticated: auth.isAuthenticated,
      },

      // You can share other global data here too
      flash: (ctx: HttpContext) => ({
        success: ctx.session.flashMessages.get('success'),
        error: ctx.session.flashMessages.get('error'),
      }),
    })

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}
