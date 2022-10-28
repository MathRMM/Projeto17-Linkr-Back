import express from "express";
import { creatRepost } from "../Controllers/repostController.js";
import { authenticateToken } from "../Middleware/authenticationMiddleware.js";

const repostsRouter = express.Router();

repostsRouter.post("/repost", creatRepost);
export default repostsRouter;
