/* import { connection } from "../DB/db.js";

export async function getAllFollowing(idUser) {
    return connection.query(
        `SELECT 
            "following"."idUserFollowing" AS id,
            "users".username AS username,
            "users"."picUrl" AS image 
        FROM public."following"
            JOIN public."users" ON "users".id = "following"."idUserFollowing"
        WHERE following."idUser" = $1;
        `,
        [
            idUser
        ]
    );
}

export async function insertFollowing(idUser, idFollowing) {
    const { rows: follow } = await connection.query(
        `SELECT * FROM public."following" WHERE "idUser" = $1 AND "idUserFollowing" = $2 LIMIT 1;`,
        [
            idUser,
            idFollowing
        ]
    );

    if (follow.length > 0) {
        return;
    }

    return connection.query(
        `INSERT INTO public."following" ("idUser", "idUserFollowing") VALUES ($1, $2);`,
        [
            idUser,
            idFollowing
        ]
    );

}

export async function getFollowing(idUser, idFollowing) {
    return connection.query(
        `SELECT * FROM public."following" WHERE "idUser" = $1 AND "idUserFollowing" = $2 LIMIT 1;`,
        [
            idUser,
            idFollowing
        ]
    );
}


export async function deleteFollowing(idUser, idFollowing) {
    const { rows: follow } = await connection.query(
        `SELECT * FROM public."following" WHERE "idUser" = $1 AND "idUserFollowing" = $2 LIMIT 1;`,
        [
            idUser,
            idFollowing
        ]
    );

    if (follow.length < 0) {
        return;
    }

    return connection.query(
        `DELETE FROM public."following" WHERE "idUser" = $1 AND "idUserFollowing" = $2;`,
        [
            idUser,
            idFollowing
        ]
    );
} */
