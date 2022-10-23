import express, { Router } from "express";
import cors from "cors";

import loginRoutes from "./Routes/loginRoutes.js";
import usersRoutes from "./Routes/usersRoutes.js";
import router from "./Routes/router.js";
import postRouter from "./Routes/postRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/status", (req, res) => res.send("ok"));

app.use(loginRoutes);
app.use(usersRoutes);
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listen on port ${PORT}`));
