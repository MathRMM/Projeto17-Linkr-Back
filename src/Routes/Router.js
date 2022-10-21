import express from "express";

import searchUser from "./usersRoutes.js";
import loginRoutes from './loginRoutes.js'
import usersRoutes from './usersRoutes.js'

const router = express.Router();

router.use(loginRoutes);
router.use(searchUser);

export default router;
