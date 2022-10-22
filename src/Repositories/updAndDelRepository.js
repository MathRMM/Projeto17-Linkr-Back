import { connection } from "../DB/db.js";

async function getUserIdByToken(token){
    return(
        await connection.query(`SELECT "idUser" FROM sessions WHERE token = $1;`, [token])
    )

}

async function getPostByIdPost(id){
    return(
        await connection.query(`SELECT * FROM posts WHERE id = $1;`, [id])
    )
}
async function updatePostByIdPost(postText, id){
    return(
        await connection.query(`UPDATE posts
        SET "postText" = $1 WHERE id = $2;`, [postText,id])
    )
}

async function deletePostByIdPost(id){
    return(
        await connection.query(`DELETE FROM posts WHERE id = $1;`, [id])
    )
}


export {getUserIdByToken, getPostByIdPost, updatePostByIdPost, deletePostByIdPost}