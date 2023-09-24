import User from "../models/User";
import jwt from "jsonwebtoken";
require('dotenv').config();

const KEY = process.env.SECRET_KEY;

export const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];

    if(!token) return res.status(403).json({message: "No token provided"});

    const decoded = jwt.verify(token, KEY);
    req.userId = decoded.id;
    const user = await User.findById(req.userId, {password:0});

    if(!user) return res.status(404).json({message: "No user found"});
    
    next();
}