import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { required: true, type: String },
  email: { type: String, required: true},
  password: { type: String, required: true },
  address: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  role: { type: String, required: true, default: 0 },
});

export default mongoose.model("users",userSchema)