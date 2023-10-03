import { Router } from "express";
import * as authCtrl from '../controllers/auth.controller'
import { checkExistingRole, checkExistingUser } from "../middlewares/verifySignup";
const router = Router();

router.post('/signup', [checkExistingUser, checkExistingRole], authCtrl.signUp);
router.post('/signin', authCtrl.signIn);

export default router;