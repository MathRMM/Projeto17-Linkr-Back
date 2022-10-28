import { postRepository } from "../Repositories/postRepository.js";
import * as responseFunction from "./Helpers/controllerHelpers.js";
import * as TagRepository from "../Repositories/TagRepository.js";
import urlMetadata from "url-metadata";

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
  const { userId } = res.locals;
  let { page } = req.query
  if (!page || page == 0) page = 1

  try {
    const posts = await postRepository.listPost(userId, page);

    return responseFunction.okResponse(res, posts);
  } catch (error) {
    return responseFunction.serverErrorResponse(res, error);
  }
}

export async function updatePostsController(req, res) {
  try {
    const count = await postRepository.updatePosts();
    return responseFunction.okResponse(res, count[0]);
  } catch (error) {
    return responseFunction.serverErrorResponse(res, error);
  }
}
