import { Router } from 'express';
import { ROUTE_LOGIN, ROUTE_REGISTER, ROUTE_USER } from '../constants/routes.js';
import * as userController from '../controllers/userController.js';
import registrationFormValidator from '../validations/registrationFormValidator.js';

const router = Router();

router.post(ROUTE_LOGIN, userController.loginUser);
router.post(ROUTE_REGISTER, registrationFormValidator, userController.registerUser);
router.get(ROUTE_USER, userController.getAllUsers);

export default router;
