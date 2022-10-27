import { Router } from "express";

import { commentsPost } from "../Controllers/commentsController.js";

const comments = Router();
 

comments.get('/comment', commentsPost);
/* comments.get('/comment/:id', updatePost); */


export default comments;