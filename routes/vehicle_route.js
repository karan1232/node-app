import express from "express";
import { addVehicleController, getVehicleBrandsController, getVehicleList } from "../controllers/vehicle_controller.js";
import { authorizeApiCall } from "../middleware/headerMiddleware.js";

const router = express.Router();

router.post("/add/data",authorizeApiCall,authorizeApiCall,addVehicleController);

router.get("/get-vehicles",authorizeApiCall,getVehicleList)

router.get("/get/car-brands",authorizeApiCall,getVehicleBrandsController)

// router.post("/book/service",authorizeApiCall,)

export default router;