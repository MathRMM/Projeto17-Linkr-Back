import express from "express";

import loginRoutes from './loginRoutes.js'
import usersRoutes from './usersRoutes.js'
import likesRoutes from "./likesRoutes.js";
import updAndDel from './updateAndDeleteRotes.js';
import postRouter from "./postRouter.js";
import comments from "./CommentRoutes.js";
import following from "./followingRoute.js";
import followRoutes from "./followRoutes.js";

const router = express.Router();

router.use(loginRoutes);
router.use(usersRoutes);
router.use(likesRoutes);
router.use(updAndDel);
router.use(postRouter);
router.use(comments);
router.use(following);
router.use(followRoutes);

export default router;