import { connection } from "../DB/db.js";

async function getCountComment(){
    return(
        await connection.query(`SELECT "idPost", COUNT (commentary) AS comments FROM commentaries GROUP BY "idPost";`)
    )
}

async function getCommentsPostByidPost(id){
    return(
        await connection.query(`SELECT users.id, users."picUrl", users.username, commentaries."idPost",
        commentaries.commentary, commentaries."isPostAuthor"
            FROM commentaries
                LEFT JOIN users ON users.id = commentaries."idAuthorComm"
                    WHERE commentaries."idPost" = $1 ORDER BY commentaries.id;`, [id])
    )
}

async function newCommentPostByidPost(idAuthorComm, id, commentary, isPostAuthor){
    return(
        await connection.query(`INSERT
        INTO commentaries ("idAuthorComm", "idPost", commentary, "isPostAuthor")
            VALUES ($1, $2, $3, $4);`, [idAuthorComm, id, commentary, isPostAuthor])
    )
}

export {getCountComment, getCommentsPostByidPost, newCommentPostByidPost}