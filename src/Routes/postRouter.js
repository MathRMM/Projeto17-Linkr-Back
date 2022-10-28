import express from "express";
import {
  creatPost,
  getPosts,
  updatePostsController,
} from "../Controllers/postController.js";
import { authenticateToken } from "../Middleware/authenticationMiddleware.js";
import { validateSchema } from "../Middleware/postMiddleware.js";

const postRouter = express.Router();

postRouter.post("/timeline", validateSchema, creatPost);

postRouter.get("/timeline", getPosts);

postRouter.get("/count/posts", updatePostsController);

export default postRouter;
