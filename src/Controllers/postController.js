import { postRepository } from "../Repositories/postRepository.js";
import * as responseFunction from "./Helpers/controllerHelpers.js"
import urlMetadata from "url-metadata";

export async function createPost(req, res) {
  const { url, comment } = req.body;
  const userId = res.locals.userId;
  const {title, image, description} = await urlMetadata(url);
  try {
    await postRepository.newPost(userId, comment, url, title, image, description);
    return responseFunction.createdResponse(res);
  } catch (error) {
    return responseFunction.serverErrorResponse(res, error);
  }
}

export async function getPosts(req, res) {
  let { page } = req.query
  if(!page || page == 0) page = 1
  
  try {
    const posts = await postRepository.listPost(page);

    return responseFunction.okResponse(res, posts);
  } catch (error) {
    return responseFunction.serverErrorResponse(res, error);
  }
}

export async function updatePostsController(req, res){
  try {
    const count = await postRepository.updatePosts();
    return responseFunction.okResponse(res, count[0]);
  } catch (error) {
    return responseFunction.serverErrorResponse(res, error);
  }
}