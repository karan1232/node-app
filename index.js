import express from "express";
import authRoute from "./routes/auth_route.js";
import vehicleRouter from "./routes/vehicle_route.js";
import profileRouter from "./routes/profile_route.js";
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
app.use("/profile", profileRouter);

app.get("/", (req, res) => {
  res.send("Welcome to test apis");
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
