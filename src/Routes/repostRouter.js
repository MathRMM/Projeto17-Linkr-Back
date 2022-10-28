import router from "express";
import express from 'express'
import { creatRepost } from "../Controllers/repostController.js";

const repostsRouter = express.Router();

repostsRouter.post("/repost", creatRepost);
export default repostsRouter;
