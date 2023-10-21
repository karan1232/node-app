import express from "express";
import {
  loginController,
  signupController,
} from "../controllers/auth_controller.js";

const authRouter = express.Router();

authRouter.post("/register", signupController);

authRouter.post("/login", loginController);

export default authRouter;