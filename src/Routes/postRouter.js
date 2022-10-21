import express from "express";
import { creatPost } from "../Controllers/postController.js";

const postRouter = express.Router();

postRouter.post("/timeline", creatPost);

export default postRouter;
