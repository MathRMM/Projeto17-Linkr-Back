import urlMetadata from "url-metadata";

import { postRepository } from "../Repositories/postRepository.js";
import * as responseFunction from "./Helpers/controllerHelpers.js"

export async function createPost(req, res) {
  const { url, comment } = req.body;

  const userId = res.locals.userId;

  try {
    await postRepository.newPost(userId, comment, url);
    return responseFunction.createdResponse(res);
  } catch (error) {
    return responseFunction.serverErrorResponse(res, error);
  }
}

export async function getPosts(req, res) {
  try {

    const posts = await postRepository.listPost();
   
    return responseFunction.okResponse(res, posts);
  } catch (error) {
    return responseFunction.serverErrorResponse(res, error);
  }
}
