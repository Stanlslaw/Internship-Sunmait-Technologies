import { Router } from "express";
import Projects from "../controllers/projects.controller.js";

const router = Router();
const commonPath = "projects";

router.get(`/${commonPath}/list`, Projects.GetProjects);

export default router;
