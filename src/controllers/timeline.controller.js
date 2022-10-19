import { connection } from '../../db/database.js';

async function updatePost(req, res) {
    const id = req.params.id;
    const {link, postText} = req.body; 

    if(!link) return res.sendStatus(422);

    // FALTA VALIDAR O USUÁRIO E SABER SE ELE É O DONO DO POST
    try {
        
        const post = await connection.query(`SELECT * FROM posts WHERE id = '${id}'`);
        if (!post.rows[0]) return res.sendStatus(404);
        console.log(post.rows[0])
        await connection.query(`UPDATE posts
            SET link = '${link}', "postText" = '${postText}'
            WHERE id = '${id}';`);
        
    } catch (error) {
        res.status(500).send(error);
       
    }
    res.sendStatus(200);
}


async function deletePost(req, res) {
    const id = req.params.id;
    
    // FALTA VALIDAR O USUÁRIO E SABER SE ELE É O DONO DO POST
    try {
        const post = await connection.query(`SELECT * FROM posts WHERE id = '${id}'`);
        if (!post.rows[0]) return res.sendStatus(404);
        await connection.query(`DELETE FROM posts WHERE id = '${id}';`);

    } catch (error) {
        res.sendStatus(error); 
    }

    res.sendStatus(204); 
}

export {updatePost, deletePost};