import connection from "../DB/db.js";

async function getUserById(id, num) {
    const page = (num * 10) - 10
    return (await connection.query(`
    SELECT 
        users.id AS "userId",
        users.username,
        users.email,
        users."picUrl" AS "userPicUrl",
        posts.id AS "postId",
        posts.link AS "postLink",
        posts."postText",
        posts.title AS "metaTitle",
        posts.image AS "metaImage",
        posts.description AS "metaDescription"
    FROM users
    JOIN posts ON posts."idUser" = users.id
    WHERE posts."idUser" = $1
    ORDER BY "postId" DESC
    OFFSET $2
    LIMIT 10;
    `, [id, page])).rows
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