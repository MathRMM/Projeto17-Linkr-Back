import express from "express";
import postRouter from "./postRouter.js";
import testeRouter from "./tesando.js";
import searchUser from "./usersRoutes.js";

const router = express.Router();

router.use(searchUser);
router.use(postRouter);
router.use(testeRouter);

export default router;
