import { connection } from "../DB/db.js";

export async function creatRepost(req, res) {
  try {
    const { idUser, idPost } = req.body;
    const newRepost = await connection.query(
      `INSERT INTO reposts("idUser" ,"idPost") VALUES ($1,$2)`[(idUser, idPost)]
    );
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
