import connection from "../DB/db.js";

async function getUserById(id) {
    return (await connection.query(`
    SELECT 
        users.id AS "userId",
        users.username,
        users.email,
        users."picUrl" AS "userPicUrl",
        posts.id AS "postId",
        posts.link AS "postLink",
        posts."postText"
    FROM users
    JOIN posts ON posts."idUser" = users.id
    WHERE posts."idUser" = $1;
    `, [id])).rows
}

async function searchUsername(idUser, username) {
    return (await connection.query(`
    SELECT * FROM (
        SELECT DISTINCT ON ("following"."idUserFollowing")
            users.id,
            users.username,
            users."picUrl",
            (
                CASE WHEN "following"."idUser" = $1 THEN 'true'
                    ELSE 'false'
                END
            ) as "followedByUser"
        FROM users
            JOIN public."following" ON users.id = "following"."idUserFollowing"
        WHERE users.username ILIKE $2
    ) as t
    ORDER BY "followedByUser" DESC;
    `, [idUser, username + '%'])).rows
}

export {
    getUserById,
    searchUsername
}