import { Router } from "express";
import Auth from "../controllers/auth.controller.js";

const router = Router();
const commonPath = "auth";

router.post(`/${commonPath}/login`, Auth.login);
router.post(`/${commonPath}/register`,Auth.register)

export default router;
