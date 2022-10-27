import express from "express";

import loginRoutes from './loginRoutes.js'
import usersRoutes from './usersRoutes.js'
import likesRoutes from "./likesRoutes.js";
<<<<<<< HEAD
import updAndDel from './updateAndDeleteRotes.js';
import postRouter from "./postRouter.js";
import comments from "./CommentRoutes.js";
import following from "./followingRoute.js";
=======
import updAndDel from './updateAndDeleteRotes.js'
import postRouter from "./postRouter.js";
>>>>>>> main

const router = express.Router();

router.use(loginRoutes);
router.use(usersRoutes);
router.use(likesRoutes);
router.use(updAndDel);
<<<<<<< HEAD
router.use(postRouter);
router.use(comments);
router.use(following);
=======
router.use(postRouter)
>>>>>>> main

export default router;