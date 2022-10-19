import express from "express";

import * as loginController from '../controllers/loginController.js'

import Validation from "../middleware/validationMiddleware.js";

import { accountSchema, loginSchema } from "../middleware/helpers/joiSchemas.js";

const loginRouter = express.Router();

loginRouter.post('/signup',
    Validation.validateSchema(accountSchema),
    loginController.signUp
);

loginRouter.post('/signin',
    Validation.validateSchema(loginSchema),
    loginController.signIn
);

loginRouter.get('/test-token', loginController.test)

export default loginRouter;