import User from '../models/User';
import jwt from 'jsonwebtoken';
import Role from '../models/Role';
require('dotenv').config();

export const signUp = async (req, res) => {
    const { username, email, password, roles } = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    });

    if (roles) {
        const foundRoles = await Role.find({name: {$in: roles}});
        newUser.roles = foundRoles.map(role => role._id);
    } else {
        const role = await Role.findOne({name: "user"});
        newUser.roles = [role._id];
    }

    console.log(newUser);
    const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser._id}, process.env.SECRET_KEY, {
        expiresIn : 86400
    })

    res.status(200).json({token});
}

export const signIn = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email})

    if(userFound) {
        const pass = await User.comparePassword(
            req.body.password,
            userFound.password
        );
    } else {
        return res.status(400).json({ message: "Invalid username or password" });
    }

    console.log(userFound)
    res.status(200).json("Login completed");

}

