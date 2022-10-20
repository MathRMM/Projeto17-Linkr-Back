import express from "express";

import * as loginController from '../Controllers/loginController.js'

import Validation from "../Middleware/validationMiddleware.js";
import { authenticateToken } from "../Middleware/authenticationMiddleware.js"

import { accountSchema, loginSchema } from "../Middleware/Helpers/joiSchemas.js";

const loginRouter = express.Router();

loginRouter.post('/signup',
    Validation.validateSchema(accountSchema),
    loginController.signUp
);

loginRouter.post('/signin',
    Validation.validateSchema(loginSchema),
    loginController.signIn
);

// rota de logout
loginRouter.get('/logout',
    authenticateToken,
    loginController.logOut
);

loginRouter.get('/test-token', loginController.test)

export default loginRouter;