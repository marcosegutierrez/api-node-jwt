import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
require('dotenv').config();

const KEY = process.env.SECRET_KEY;

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if(!token) return res.status(403).json({message: "No token provided"});
    
        const decoded = jwt.verify(token, KEY);
        req.userId = decoded.id;
        const user = await User.findById(req.userId, {password:0});
    
        if(!user) return res.status(404).json({message: "No user found"});
        
        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"});
    }
}

const isRole = async (req, res, next, rol) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({_id: {$in: user.roles}});
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === rol) {
            next();
            return;
        }
    }
    return res.status(403).json({message: `Require ${rol} role`});
}

export const isModerator = async (req, res, next) => {
    isRole(req, res, next, "moderator");
}

export const isAdmin = async (req, res, next) => {
    isRole(req,res, next, "admin");
}