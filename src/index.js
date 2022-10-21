import express from "express";
import cors from "cors";

import router from './Routes/Router.js'

const app = express();
app.use(express.json());
app.use(cors());

app.get("/status", (req, res) => res.send("ok"));

app.use(router)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listen on port ${PORT}`));
