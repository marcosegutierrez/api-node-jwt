import User from '../models/User';

export const checkExistingUser = async (req, res, next) => {
    try {
        const userFound = await User.findOne({username: req.body.username});
        if (userFound) return res.status(400).json({message: "The user already exist"});
        const email = await User.findOne({email: req.body.email});
        if (email) return res.status(400).json({message: "The email already exist"});
        next();
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}