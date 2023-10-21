import mongoose from "mongoose";

const vehicleMddel = mongoose.Schema({
  brand: { required: true, trim: true, type: String },
  model: { required: true, trim: true, type: String },
  vehicleNumber: { required: true, trim: true, type: String },
  fuelType: { required: true, trim: true, type: String },
  userId: { required: true, trim: true, type: String },
});

export default mongoose.model("vehicle-list",vehicleMddel);
