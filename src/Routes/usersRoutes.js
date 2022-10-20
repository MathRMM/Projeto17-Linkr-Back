import { Router } from "express";

import {
  getUserByIdController,
  searchUsernameController,
} from "../Controllers/usersController.js";

const searchUser = Router();

searchUser.get("/users/:id", getUserByIdController);
searchUser.get("/users/search/:username", searchUsernameController);

export default searchUser;
