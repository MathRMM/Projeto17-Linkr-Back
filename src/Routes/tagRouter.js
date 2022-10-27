import express from "express";
import { getTagRanking } from "../Controllers/trendController.js";

const tagRouter = express.Router();

tagRouter.get("/ranking", getTagRanking);
