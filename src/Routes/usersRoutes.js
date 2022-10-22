import { Router } from "express";

import {
  getUserByIdController,
  searchUsernameController,
} from "../Controllers/usersController.js";

const usersRoutes = Router();

usersRoutes.get("/users/:id", getUserByIdController);
usersRoutes.get("/users/search/:username", searchUsernameController);

export default usersRoutes;
