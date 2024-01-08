import { Router } from "express";
import Projects from "../controllers/projects.controller.js";
import checkToken from "../middleware/checkToken.js";

const router = Router();
const commonPath = "projects";

router.get(`/${commonPath}/list`,checkToken, Projects.GetProjects);

export default router;
