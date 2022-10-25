import { postRepository } from "../Repositories/postRepository.js";
import * as responseFunction from "./Helpers/controllerHelpers.js"

import urlMetadata from 'url-metadata';

export async function createPost(req, res) {
  const { url, comment } = req.body;

  const userId = res.locals.userId;

  console.log(await urlMetadata(url))

  try {
    //await postRepository.newPost(userId, comment, url);
    return responseFunction.createdResponse(res);
  } catch (error) {
    return responseFunction.serverErrorResponse(res, error);
  }
}

export async function getPosts(req, res) {
  const { page } = req.query
  try {

    const posts = await postRepository.listPost();
    const metaPost = await getMetadata(posts)

    return responseFunction.okResponse(res, metaPost);
  } catch (error) {
    return responseFunction.serverErrorResponse(res, error);
  }
}

