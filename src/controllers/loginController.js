import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotenv from "dotenv";
dotenv.config();

import { getUser, getUserByEmail, insertUser, upsertSessions } from '../repositories/loginRepository.js';

export async function signUp(req, res) {
    const { validation } = res.locals;

    try {
        const { rows: user } = await getUser(validation.value.email, validation.value.username);
        if (user.length !== 0) {
            const message = user[0].username === validation.value.username ? 'Username not available' : 'Invalid email';
            res.status(409).send({
                message
            });
            return;
        }

        await insertUser(validation.value);

        res.sendStatus(201);
        return;
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        return;
    }
}

export async function signIn(req, res) {
    const { validation } = res.locals;

    try {
        // TODO - fazer o input ser username ou email
        const { rows: user } = await getUserByEmail(validation.value.email);
        if (user.length === 0 || !bcrypt.compareSync(validation.value.password, user[0].password)) {
            res.status(401).send({
                message: 'Email or password invalid'
            });
            return;
        }

        const userToken = jwt.sign(
            { userId: user[0].id },
            process.env.SECRET_TOKEN,
            { expiresIn: '10min' }
        );
        if (!userToken) {
            res.sendStatus(500);
            return;
        }

        await upsertSessions(user[0].id, userToken);
        res.status(201).send({
            token: userToken
        });
        return;
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        return;
    }
}

// TODO - apagar rota de teste
export async function test(req, res) {
    try { // fazer verificação para o token com try >> caso de o erro p ter expirado redirecionar para o login no front (talvez usar um status diferente) >> 440 Login Time-out
        const token = req.headers.authorization;
        const retornoToken = jwt.verify(token, process.env.SECRET_TOKEN);
        res.status(201).send(retornoToken);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        return;
    }
}