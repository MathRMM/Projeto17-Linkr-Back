import { connection } from "../DB/db.js";

async function getUserById(id){
    return (await connection.query(`
        SELECT 
            id,
            username,
            email,
            "picUrl"
        FROM users
        WHERE id = $1;
    `, [id])).rows[0]
}

export {
    getUserById
}