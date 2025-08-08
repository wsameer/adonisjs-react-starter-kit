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

router.on('dashboard').renderInertia('dashboard').use(middleware.auth()).as('dashboard')

router
  .group(() => {
    router.post('/logout', [SessionController, 'destroy']).as('logout')
  })
  .use([middleware.auth()])
