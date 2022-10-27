import { connection } from "../DB/db.js";

async function getCountComment(){
    return(
        await connection.query(`SELECT "idPost", COUNT (commentary) AS comments FROM commentaries GROUP BY "idPost";`)
    )
}

export {getCountComment}