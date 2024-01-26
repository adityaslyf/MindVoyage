import express from "express";

import User from "../models/User.js";

import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
