import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

import loginRoutes from './Routes/loginRoutes.js'
import usersRoutes from './Routes/usersRoutes.js'
import updAndDel from "./Routes/updateAndDeleteRotes.js"

const app = express();
app.use(express.json());
app.use(cors());

app.get("/status", (req, res) => res.send("ok"));

app.use(loginRoutes);
app.use(usersRoutes);
app.use(updAndDel);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listen on port ${PORT}`));
