import express from "express";

import * as followController from '../Controllers/followController.js'

import { authenticateToken } from "../Middleware/authenticationMiddleware.js"

// import { accountSchema, loginSchema } from "../Middleware/Helpers/joiSchemas.js";

const followRouter = express.Router();

followRouter.use(authenticateToken);

// rota de logout
followRouter.get('/following', followController.returnFollowing);

followRouter.get('/following/:id', followController.returnIsFollowing);

followRouter.get('/follow/:id', followController.addFollow);

followRouter.get('/unfollow/:id', followController.removeFollow);

export default followRouter;