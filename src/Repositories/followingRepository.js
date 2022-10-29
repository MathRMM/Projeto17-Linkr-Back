import { connection } from "../DB/db.js";

async function getFollowingsByidUser(id) {
  return await connection.query(
    `SELECT * FROM following WHERE "idUser" = $1;`,
    [id]
  );
}

export { getFollowingsByidUser };