import express from "express";
import postRouter from "./postRouter.js";
import tagRouter from "./tagRouter.js";
import searchUser from "./usersRoutes.js";

const router = express.Router();

router.use(searchUser);
router.use(postRouter);
router.use(tagRouter);

export default router;
