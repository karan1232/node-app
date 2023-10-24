import mongoose from "mongoose";

const serviceModel = mongoose.Schema({
  serviceDate: { type: Date, default: Date.now },
  
});
