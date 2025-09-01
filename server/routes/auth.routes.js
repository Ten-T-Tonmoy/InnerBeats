import { Router } from "express";
import {
  getUserController,
  loginController,
  signupController,
} from "../controllers/auth.controller.js";
import { authCheckMiddleware } from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post("/signup", signupController);
authRouter.post("/login", loginController);
authRouter.get("/me", authCheckMiddleware, getUserController);

export default authRouter;
