import express from "express";
import postRouter from "./postRouter.js";
import searchUser from "./usersRoutes.js";

const router = express.Router();

router.use(searchUser);
router.use(postRouter);

export default router;
