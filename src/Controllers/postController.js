import { postRepository } from "../Repositories/postRepository.js";
import urlMetadata from "url-metadata";

export async function creatPost(req, res) {
  const { url, comment } = req.body;

  const id = res.locals.userId;

  try {
    const metaDados = await urlMetadata(url);

    await postRepository.newPost(id, comment, url, metaDados);

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getPosts(req, res) {
  const verifiedUser = res.locals.userId;

  try {
    const id = verifiedUser.id;

    let posts = [];

    posts = await postRepository.listPost();

    res.status(200).send(posts);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
}
