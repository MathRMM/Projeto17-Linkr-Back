import express from "express";
import { createPost, getPosts } from "../Controllers/postController.js";
import { authenticateToken } from "../Middleware/authenticationMiddleware.js";
import { validateSchema } from "../Middleware/postMiddleware.js";

const postRouter = express.Router();

postRouter.post(
  "/timeline",
  validateSchema,
  createPost
);

postRouter.get("/timeline", authenticateToken, getPosts);

export default postRouter;
