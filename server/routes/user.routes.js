import { Router } from "express";
import { getAllUsersController } from "../controllers/user.controller.js";

const userRouter = new Router();

userRouter.get("/allusers", getAllUsersController);

export default userRouter;
