import { Router } from "express";
import { dashboard, login } from "../controllers/main.js";
import { authenticationMiddleware } from "../middleware/auth.js";
export const router = Router();

router.get('/dashboard', authenticationMiddleware, dashboard)
router.post('/login', login)