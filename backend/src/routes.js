import { Router } from 'express'

import UserController from './app/controllers/UserController';
import RecipeController from './app/controllers/RecipeController'; 
import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.get("/", async (req, res) => {
  res.send("Coco Bambu API is running!")
});

routes.post('/signin', UserController.signin)

routes.get('/recipe/:id?',  RecipeController.show)
routes.get('/recipes', authMiddleware, RecipeController.list)

export default routes