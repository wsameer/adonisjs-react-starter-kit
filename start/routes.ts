/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RegistersController = () => import('#controllers/registers_controller')
const SessionController = () => import('#controllers/session_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

// Web routes
router.on('/').renderInertia('welcome').as('home')
router.on('/login').renderInertia('auth/login')
router.on('/register').renderInertia('auth/register')

// API routes
// router.any('/api/*', [TrpcController, 'handle']).as('api')
router
  .group(() => {
    router.post('/login', [SessionController, 'store']).as('login')
    router.delete('/logout', [SessionController, 'destroy']).as('logout')
    router.post('/register', [RegistersController, 'store']).as('register_user')
  })
  .use([middleware.guest()])
  .as('auth-routes')
  .prefix('api/auth')
