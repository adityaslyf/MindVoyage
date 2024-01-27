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

app.get('/api/profile/:id', (req, res) => {
  const userID = req.params.id;

  // Check if user with given userID exists
  User.findOne({ _id: userID }, (err, user) => {
    if (err) {
      // Handle error
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (user) {
        const interests = user.interests;
        const username = user.username;
        const imageURL = user.imageURL;
        res.json({ interests, username, imageURL });
      } else {
        const interests = [];
        const username = "Dummy User";
        const imageURL = "https://dummyimage.com/200x200";
        res.json({ interests, username, imageURL });
      }
    }
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Backend server is running!");
});
