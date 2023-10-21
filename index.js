import express from "express";
import authRoute from "./routes/auth_route.js";
import vehicleRouter from "./routes/vehicle_route.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();

//connect db
dotenv.config();

//connection to database
connectDb();

//middleware
app.use(morgan("dev"))
app.use(express.json());


//routes
app.use("/api/v1/auth", authRoute);
app.use("/vehicle",vehicleRouter );

app.get("/", (req, res) => {
  res.send("Welcome to test apis");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
