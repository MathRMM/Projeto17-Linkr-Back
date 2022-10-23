import { Router } from "express";

import { deletePost, updatePost } from '../Controllers/updAndDelController.js'

const updAndDel = Router();
 

updAndDel.put('/timeline/:id', updatePost);
updAndDel.delete('/timeline/:id', deletePost);


export default updAndDel;