import { Router } from "express";
import {
  addToHistoryController,
  getAllUsersController,
  getUserHistoryController,
} from "../controllers/user.controller.js";
import { authCheckMiddleware } from "../middleware/auth.middleware.js";
import { getUserCount } from "../controllers/auth.controller.js";

const userRouter = new Router();

userRouter.get("/allusers", getAllUsersController);
userRouter.post("/addhistroy", authCheckMiddleware, addToHistoryController);
userRouter.get("/gethistroy", authCheckMiddleware, getUserHistoryController);
userRouter.get("/usercount", getUserCount);
export default userRouter;
