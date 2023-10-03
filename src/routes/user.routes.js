import { Router } from "express";
import { createUser } from "../controllers/user.controller";
import { isAdmin, verifyToken } from "../middlewares/authJwt";
import { checkExistingRole, checkExistingUser } from "../middlewares/verifySignup";

const router = Router();

router.post('/', [verifyToken, isAdmin, checkExistingUser, checkExistingRole], createUser);

export default router;