import express from "express";
import searchUser from "./usersRoutes";

const router = express.Router();

router.use(searchUser);

export default router;
