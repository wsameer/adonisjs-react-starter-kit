/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// Web routes
router.on('/').renderInertia('home')

// TODO - tRPC API routes
// router.any('/trpc/*', [TrpcController, 'handle']).as('trpc')

