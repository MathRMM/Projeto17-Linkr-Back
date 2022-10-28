import { connection } from "../DB/db.js";

async function newPost(id, postText, link, title, image, description) {
  return connection.query(`
    INSERT INTO posts ("idUser", "postText",link, title, image, description )
    VALUES($1, $2, $3, $4, $5, $6);`,
    [
      id,
      postText,
      link,
      title,
      image,
      description
    ]
  );
}

/* async function listPost(userId, num) {
  const page = (num * 10) - 10
  return (await connection.query(`
  SELECT DISTINCT ON (posts.id)
		users.id AS "userId", 
		users.username, 
		users."picUrl",
		posts.id AS "postId", 
		posts."postText",
		posts.link AS "postLink",
		posts.title AS "metaTitle",
		posts.image AS "metaImage",
		posts.description AS "metaDescription"
	FROM users 
		JOIN posts ON users.id = posts."idUser"
		JOIN public."following" ON users.id = "following"."idUserFollowing"
	WHERE "following"."idUser" = $1 OR users.id = $1
	ORDER BY posts.id DESC
	OFFSET $2
	LIMIT 10;`,
    [userId, page])).rows;
} */

async function listPost(num) {
  const page = (num * 10) - 10
  return (await connection.query(`
  SELECT 
    users.id AS "userId", 
    users.username, 
    users."picUrl",
    posts.id AS "postId", 
    posts."postText",
    posts.link AS "postLink",
    posts.title AS "metaTitle",
    posts.image AS "metaImage",
    posts.description AS "metaDescription"
  FROM users 
  JOIN posts ON users.id = posts."idUser"  
  ORDER BY "postId" DESC
  OFFSET $1
  LIMIT 10;`
    , [page])).rows;
}

async function updatePosts() {
  return (await connection.query(`
  SELECT
    COUNT(posts)
  FROM posts;
  `)).rows;
}

export const postRepository = {
  listPost,
  newPost,
  updatePosts
};