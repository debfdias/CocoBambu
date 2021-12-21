import { Router } from 'express'

import UserController from './app/controllers/UserController';
import RecipeController from './app/controllers/RecipeController'; 
import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/signin', UserController.signin)

routes.get('/recipe/:id?', authMiddleware, RecipeController.show)
routes.get('/recipe', authMiddleware, RecipeController.list)

export default routes