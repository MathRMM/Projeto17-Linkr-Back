import { postRepository } from "../repository/postRepository.js";

export async function post(req, res) {
  const { url, comment } = req.body;

  const { id } = res.locals;

  try {
    if (comment === undefined) {
      comment = "";
    }
    const metaDados = await urlMetadata(url);

    await postRepository.newPost(id, comment, url, metaDados);

    res.sendStatus("200");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}