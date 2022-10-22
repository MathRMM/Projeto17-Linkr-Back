import { Router } from "express";

import { deletePost } from '../Controllers/updAndDelController.js'

const updAndDel = Router();


updAndDel.delete('/timeline/:id', deletePost);

export default updAndDel;