import { Router } from "express";

import { countCommentsPost, commentsPost, newCommentOnPost } from "../Controllers/commentsController.js";

const comments = Router();
 

comments.get('/comment', countCommentsPost);
comments.get('/comment/:id', commentsPost);
comments.post('/comment/:id', newCommentOnPost); 


export default comments;