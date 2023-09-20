import User from '../models/User';
import jwt from 'jsonwebtoken';
require('dotenv').config();

export const signUp = async (req, res) => {
    const { username, email, password, roles } = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    });

    const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser._id}, process.env.SECRET_KEY, {
        expiresIn : 86400
    })

    res.status(200).json({token});
}

export const signIn = async (req, res) => {
    res.json("signin");
}

