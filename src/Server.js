/* import express from "express";
import cors from "cors";
import router from "./Routes/Router.js";

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.get("/status", (req, res) => res.send("ok"));

server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`listen on port ${PORT}`));
 */
