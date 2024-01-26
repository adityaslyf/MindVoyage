import express from 'express';

const router = express.Router();
import User from '../models/user.js';


//Register

router.post("/register", async (req, res) => {  
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
az
    try {
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
})



export default router;