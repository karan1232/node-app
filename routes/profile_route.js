import express from "express";
import { getUserProfileData } from "../controllers/profile_controller.js";
import { authorizeApiCall } from "../middleware/headerMiddleware.js";

const router = express.Router();

router.get("/user/get-userProfle",authorizeApiCall,getUserProfileData)

export default router;