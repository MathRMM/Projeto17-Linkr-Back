import { connection } from '../database/db.js';
import bcrypt from 'bcrypt';


export async function insertUser({ username, email, password, picUrl }) {
    const result = await connection.query(
        `INSERT INTO public."users" (username, email, password, "picUrl") VALUES ($1, $2, $3, $4);`,
        [
            username,
            email,
            bcrypt.hashSync(password, 10),
            picUrl
        ]
    );

    return result;
}


export async function getUser(email, username) {
    return connection.query(
        `SELECT * FROM public."users" WHERE email = $1 OR username = $2 LIMIT 1;`,
        [
            email,
            username,
        ]
    );
}

export async function getUserByEmail(email) {
    return connection.query(
        `SELECT * FROM public."users" WHERE email = $1 LIMIT 1;`,
        [email]
    );
}


export async function upsertSessions(userId, token) {
    const { rows: session } = await connection.query(
        `SELECT * FROM public."sessions" WHERE "idUser" = $1 LIMIT 1;`,
        [userId]
    );
    if (session.length !== 0) {
        return connection.query(`UPDATE public."sessions"
            SET token = $1
            WHERE "idUser" = $2;`,
            [
                token,
                userId,
            ]
        );
    } else {
        return connection.query(
            `INSERT INTO public."sessions" ("idUser", token) VALUES ($1, $2);`,
            [
                userId,
                token,
            ]
        );
    }
}

export async function deleteSessionByUserId(userId) {
    return connection.query(
        `DELETE FROM public."sessions" WHERE "idUser" = $1;`,
        [userId]
    );
}

export async function getSessionByToken(token, userId) {
    const { rows: session } = await connection.query(
        `SELECT * FROM public."sessions" WHERE token = $1 AND "idUser"=$2 LIMIT 1;`,
        [token, userId]
    );
    return session;
}
