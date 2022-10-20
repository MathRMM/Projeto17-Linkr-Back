import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

import * as response from '../Controllers/Helpers/controllerHelpers.js';

import { getSessionByToken } from '../Repositories/loginRepository.js';

export async function authenticateToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    if (!token) return response.badRequestResponse(res);

    try {
        const { userId } = jwt.verify(token, process.env.SECRET_TOKEN);

        const session = await getSessionByToken(token, userId);
        if (session.length === 0) return response.badRequestResponse(res);

        res.locals.userId = userId;

        next();
    } catch (error) {
        response.serverErrorResponse(res, error);
        return;
    }
}