import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

const router = express.Router();

//register
router.post("/register", async(req,res)=>{
    try{
        const  {name, email, password } = req.body

        const exists = await User.findOne({email});
        if(exists) return res.status(400).json({msg:"User Already Exists"});

        const hashed = await bcrypt.hash(password,10);
        const newUser = await User({name,email, password:hashed});
        await newUser.save();

        res.status(201).json({msg:"User registered succesfully"})


    } catch (err) {
        res.status(500).json({msg:"Server error"})
    }
})


//login

router.post("/login" , async(req,res) =>{
    try{
        const {email, password} = req.body;


        const user = await User.findOne({email})
        if(!user) return res.status(400).json({msg:"invalid crendentials"})

        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(400).json({msg:"invalid credentials"})

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });


    } catch (err) {
        res.status(500).json({msg:"Server error"})
    }
})

export default router;
