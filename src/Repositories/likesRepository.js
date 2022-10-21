import { connection } from "../DB/db.js";

async function getLikes (postId){
    return (await connection.query(`
    SELECT 
        posts.id,
        (SELECT COUNT(likes."idPostLiked") FROM likes WHERE likes."idPostLiked" = posts.id),
        users.username,
        users.id AS "userId"
    FROM likes
    JOIN users ON users.id = likes."idUser"
    JOIN posts ON posts.id = likes."idPostLiked"
    WHERE posts.id = $1;
    `, [postId])).rows
}

async function delsertLikes(userId, postId){
    const result = (await connection.query(`
    SELECT 
        "idUser",
        "idPostLiked"
    FROM likes
    WHERE "idUser" = $1 AND "idPostLiked" = $2;
    `), [userId, postId]).rowCount

    if(result > 0){
        return connection.query(`
        DELETE FROM likes WHERE "idUser" = $1 AND "idPostLiked" = $2;
        `, [userId, postId])
    }else {
        return connection.query(`
        INSERT INTO likes ("idUser", "idPostLiked")
        VALUES ($1, $2);
        `, [userId, postId])
    }
}

export {
    getLikes,
    delsertLikes
}