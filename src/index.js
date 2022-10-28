import express from "express";
import cors from "cors";

import router from './Routes/Router.js'

import dotenv from 'dotenv'
dotenv.config()


const app = express();
app.use(express.json());
app.use(cors());

app.get("/status", (req, res) => res.send("ok"));

app.use(router)


app.listen(process.env.PORT || 5000, console.log("Server running on port " + process.env.PORT || 5000));