import vehicleModel from "../model/vehicleModel.js";
import loc from "list-of-cars";

export const getVehicleList = async (req, res) => {
  try {
    const criteria = { userId: req.user._id };
    const vehicleList = await vehicleModel.find(criteria);
    res
      .status(200)
      .send({ success: true, message: "Vehicle list", vehicleList });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

export const addVehicleController = async (req, res) => {
  try {
    const { brand, model, fuelType, vehicleNumber } = req.body;
    if (!brand) {
      res.status(400).send({ success: false, message: "Brand is required" });
    }
    if (!model) {
      res.status(400).send({ success: false, message: "Model is required" });
    }
    if (!fuelType) {
      res
        .status(400)
        .send({ success: false, message: "Fuel Type is required" });
    }
    if (!vehicleNumber) {
      res
        .status(400)
        .send({ success: false, message: "Vehicle plate number is required" });
    }
    const vehicleExists = await vehicleModel.findOne({ vehicleNumber });
    console.log(`hey vehicle exists ${vehicleExists}`);
    if (vehicleExists) {
      return res
        .status(200)
        .send({ success: false, message: "Vehicle already exists" });
    }

    const Vehicle = await new vehicleModel({
      brand,
      model,
      vehicleNumber,
      fuelType,
      userId: req.user._id,
    }).save();
    res.status(201).send({ Vehicle });
  } catch (error) {
    console.log(error);
  }
};

export const getVehicleBrandsController = async(req, res) => {
  try {
    console.log("entered this block");
    loc.getList((res) => {
      // console.log(res);
      console.log(loc.getCarMakes());
      console.log(loc.getCarsByMakeObj());
      console.log(loc.getCarCategories());
      console.log(loc.getCarsByCategoryObj());
    });
    res.status(200).send({success:true});
  } catch (error) {console.log(error)}
};

export const bookVehicleService = async(req,res) => {
  // const user = req.user._id;

}
