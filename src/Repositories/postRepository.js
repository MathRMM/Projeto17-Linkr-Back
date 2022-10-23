import { connection } from "../DB/db.js";

async function newPost(id, comment, url, metaDados) {
  return connection.query(
    `INSERT INTO posts ("idUser","postText",link,title,description,image)VALUES($1, $2, $3, $4, $5, $6)`,
    [id, comment, url, metaDados.title, metaDados.description, metaDados.image]
  );
}

async function listPost() {
  return connection.query(
    `SELECT users.id, posts.id AS postId, users.username, users."picUrl" AS profile, posts."postText", posts.link, posts.title, posts.image , posts.description FROM
     users JOIN posts ON users.id = posts."idUser"  ORDER BY posts.id DESC
    LIMIT 20;`
  );
}

export const postRepository = {
  listPost,
  newPost,
};
