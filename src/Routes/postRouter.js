import express from "express";
import { creatPost, getPosts } from "../Controllers/postController.js";
import { authenticateToken } from "../Middleware/authenticationMiddleware.js";
import { newPostSchema } from "../Middleware/Helpers/newPostSchema.js";
import { validateSchema } from "../Middleware/validateSchema.js";

const postRouter = express.Router();

postRouter.post(
  "/timeline",
  authenticateToken,
  validateSchema(newPostSchema),
  creatPost
);

postRouter.get("/timeline", authenticateToken, getPosts);

export default postRouter;
