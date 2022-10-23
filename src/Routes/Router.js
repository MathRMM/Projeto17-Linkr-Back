import express from "express";

import loginRoutes from './loginRoutes.js'
import usersRoutes from './usersRoutes.js'
import likesRoutes from "./likesRoutes.js";
import updAndDel from './updateAndDeleteRotes.js'

const router = express.Router();

router.use(loginRoutes);
router.use(usersRoutes);
router.use(likesRoutes);
router.use(updAndDel);

export default router;