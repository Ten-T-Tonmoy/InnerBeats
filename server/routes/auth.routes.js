import { Router } from "express";
import {
  getUser,
  getUserController,
  loginController,
  logoutController,
  signupController,
} from "../controllers/auth.controller.js";
import { authCheckMiddleware } from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post("/signup", signupController);
authRouter.post("/login", loginController);
authRouter.post("/logout", logoutController);
authRouter.get("/me", authCheckMiddleware, getUser);

export default authRouter;
