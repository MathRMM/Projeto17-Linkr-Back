import express from "express";
import { testando } from "../Controllers/testando.js";

const testeRouter = express.Router();

testeRouter.post("/teste", testando);

export default testeRouter;
