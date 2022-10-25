import { connection } from "../DB/db.js";

async function newPost(id, postText, link) {
  return connection.query(`
    INSERT INTO posts ("idUser", "postText",link )
    VALUES($1, $2, $3)`,
    [
      id,
      postText,
      link
    ]
  );
}

async function listPost() {
  return (await connection.query(`
  SELECT 
    users.id, 
    users.username, 
    users."picUrl" AS profile,
    posts.id AS postId, 
    posts."postText",
    posts.link AS "postLink"
  FROM users 
  JOIN posts ON users.id = posts."idUser"  
  ORDER BY postId DESC
  LIMIT 20;`
  )).rows;
}

export const postRepository = {
  listPost,
  newPost,
};