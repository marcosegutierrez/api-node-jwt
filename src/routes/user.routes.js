import { Router } from "express";
import { createUser } from "../controllers/user.controller";
import { isAdmin, verifyToken } from "../middlewares/authJwt";
import { checkExistingUser } from "../middlewares/verifySignup";

const router = Router();

router.post('/', [verifyToken, isAdmin, checkExistingUser], createUser);

export default router;