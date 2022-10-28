import { Router } from "express";

import { countCommentsPost, commentsPost, newCommentOnPost } from "../Controllers/commentsController.js";

const comments = Router();
 

comments.get('/comment/:id', countCommentsPost);
comments.get('/comments/:id', commentsPost);
comments.post('/comment/:id', newCommentOnPost); 


export default comments;