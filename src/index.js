import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config()

import router from './Routes/Router.js'



const app = express();
app.use(express.json());
app.use(cors());

app.get("/status", (req, res) => res.send("ok"));

app.use(router)


app.listen(process.env.PORT || 5000, console.log("Server running on port " + process.env.PORT || 5000));