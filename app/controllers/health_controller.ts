import { HttpContext } from '@adonisjs/core/http'

export default class HealthController {
  /**
   * Get server health status
   */
  async index({ response }: HttpContext) {
    return response.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
    })
  }
}
