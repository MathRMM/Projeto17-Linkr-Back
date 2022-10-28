import router from "express";
import { creatRepost } from "../Controllers/repostController";
import { authenticateToken } from "../Middleware/authenticationMiddleware";

const repostsRouter = express.router();

repostsRouter.post("/repost", creatRepost);
export default repostsRouter;
