import { connection } from "../DB/db.js";

export function getLastPost() {
  return connection.query(`SELECT * FROM posts ORDER BY ID DESC LIMIT 1`);
}

export function getTagName(name) {
  return connection.query(`SELECT * FROM tags WHERE name=$1`, [name]);
}

export function insertNewTag(name) {
  return connection.query(
    `INSERT INTO tags (name, visitcount) VALUES ($1, $2)`,
    [name, 1]
  );
}

export function updateTag(idTag) {
  return connection.query(
    `UPDATE tags SET visitcount=visitcount+1 WHERE id=$1`,
    [idTag]
  );
}

export function insertPostTags(idPost, idTag) {
  return connection.query(
    `INSERT INTO "postTags" ("idPost", "idTag") VALUES ($1, $2)`,
    [idPost, idTag]
  );
}

export function getTagRanking() {
  return connection.query(
    `SELECT * FROM tags ORDER BY visitcount DESC LIMIT 10 `
  );
}
