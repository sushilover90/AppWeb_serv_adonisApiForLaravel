'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('login', 'UserController.login')
Route.post('register', 'UserController.register')
Route.get('protocols', 'UserController.protocols').middleware(['auth'])
Route.get('ports', 'UserController.ports').middleware(['auth'])
Route.get('triggers', 'UserController.triggers').middleware(['auth'])
Route.get('facets', 'UserController.facets').middleware(['auth'])
Route.get('ip', 'UserController.ip').middleware(['auth'])
