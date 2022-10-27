import { postRepository } from "../Repositories/postRepository.js";
import urlMetadata from "url-metadata";
import * as TagRepository from "../Repositories/TagRepository.js";

export async function creatPost(req, res) {
  const { url, comment } = req.body;

  const id = res.locals.userId;

  try {
    const metaDados = await urlMetadata(url);

    await postRepository.newPost(id, comment, url, metaDados);

    const { rows: postId } = await TagRepository.getLastPost();
    const hashtag = req.body.comment.split("#");
    for (let i = 1; i <= hashtag.length - 1; i++) {
      let trend = hashtag[hashtag.length - i];
      trend = trend.replace(/\s/g, "");
      const idPost = postId[0].id;
      const { rows: check } = await TagRepository.getTagName(trend);
      if (check.length === 0) {
        await TagRepository.insertNewTag(trend);
      } else {
        await TagRepository.updateTag(check[0].id);
      }
      const { rows: idTag } = await TagRepository.getTagName(trend);
      await TagRepository.insertPostTags(idPost, idTag[0].id);
    }

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
