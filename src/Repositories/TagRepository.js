import { connection } from "../DB/db.js";

export function getTagRanking() {
  return connection.query(
    `SELECT * FROM tags ORDER BY visitcount DESC LIMIT 10 `
  );
}

export function getLastPost() {
  return connection.query(`SELECT * FROM posts ORDER BY ID DESC LIMIT 1`);
}

export function getTagName(name) {
  return connection.query(`SELECT * FROM tags WHERE name=$1`, [name]);
}

export function updateTag(idTag) {
  return connection.query(
    `UPDATE tags SET visitcount=visitcount+1 WHERE id=$1`,
    [idTag]
  );
}

export function insertNewTag(name) {
  return connection.query(
    `INSERT INTO tags (name, visitcount) VALUES ($1, $2)`,
    [name, 1]
  );
}

export function insertPostTags(idPost, idTag) {
  return connection.query(
    `INSERT INTO "postTags" ("idPost", "idTag") VALUES ($1, $2)`,
    [idPost, idTag]
  );
}

export async function getTagPosts(id) {
  return connection.query(
    `SELECT 
    posts.id AS "postId",
    posts."postText",
    posts.link AS "postLink",
    posts.title AS "metaTitle",
    posts.image AS "metaImage",
    posts.description AS "metaDescription",
    users.username AS username, 
    users.email,
    users."picUrl" AS "picUrl",
    tags.name AS hashtag
    FROM posts JOIN users ON posts."idUser" = users.id 
    JOIN "postTags" ON posts.id="postTags"."idPost" 
    JOIN tags ON "postTags"."idTag"=tags.id
    WHERE "postTags"."idTag" = $1`,
    [id]
  );
}

export async function getInfoUrl(url) {
  return connection.query(
    'SELECT image,title,description FROM "posts" WHERE id = $1',
    [url]
  );
}
