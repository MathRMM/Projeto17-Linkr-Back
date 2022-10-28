import express from "express";
import { getPostTag, getTagRanking } from "../Controllers/tagController.js";

const tagRouter = express.Router();

tagRouter.get("/ranking", getTagRanking);

tagRouter.get("/hashtag/:hashtag", getPostTag);
export default tagRouter;
