import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/db.js";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
