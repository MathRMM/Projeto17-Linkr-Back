import { connection } from "../DB/db.js";

async function getUserById(id, num){
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

async function searchUsername(username){
    return (await connection.query(`
    SELECT 
        users.id,
        users.username,
        users."picUrl"
    FROM users
    WHERE users.username ILIKE $1;
    `, [username + '%'])).rows
}

export {
    getUserById,
    searchUsername
}