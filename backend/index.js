import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Backend server is running!");
});
