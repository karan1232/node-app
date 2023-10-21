import mongoose from "mongoose";

export const connectDb = async() => {
  try {
    const status = await mongoose.connect(process.env.mongoDbUrl);
    console.log(`Connection to db successful ${status.connection.host}`);
  } catch (error) {
    console.log(`connection to db failed ${error}`);
  }
};
