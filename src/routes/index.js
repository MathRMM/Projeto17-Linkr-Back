import express from "express";

import loginRouter from './loginRouter.js'

const router = express.Router();

router.use(loginRouter);

export default router;