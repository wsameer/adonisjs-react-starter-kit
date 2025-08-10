/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const SessionController = () => import('#controllers/session_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const RegisteredUsersController = () => import('#controllers/registered_users_controller')

// Web routes
router.on('/').renderInertia('welcome').as('home')
router.group(() => {
  router.get('/login', [SessionController, 'create']).as('login')
  router.get('/register', [RegisteredUsersController, 'create']).as('register')
})

router
  .group(() => {
    router.on('/dashboard').renderInertia('dashboard').as('dashboard')
  })
  .use([middleware.auth()])

router
  .group(() => {
    router.on('/settings').redirect('/settings/profile')
    router.on('/settings/profile').renderInertia('settings/profile').as('settings.profile')
    router.on('/settings/security').renderInertia('settings/security').as('settings.security')
    router.on('/settings/appearance').renderInertia('settings/appearance').as('settings.appearance')
  })
  .use([middleware.auth()])

// API routes
// router.any('/api/*', [TrpcController, 'handle']).as('api')
router
  .group(() => {
    router.post('/login', [SessionController, 'store']).as('login')
    router.post('/register', [RegisteredUsersController, 'store']).as('register_user')
  })
  .use([middleware.guest()])
  .as('auth-routes')
  .prefix('api/auth')

router
  .group(() => {
    router.post('/logout', [SessionController, 'destroy']).as('logout')
  })
  .use([middleware.auth()])
