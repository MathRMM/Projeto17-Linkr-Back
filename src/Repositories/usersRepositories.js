import { connection } from "../DB/db.js";

async function getUserById(id){
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