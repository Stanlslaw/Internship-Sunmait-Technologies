import { Router } from "express";

import TicketsController from "../controllers/tickets.controller.js";
const router = Router();
const commonPath = "tickets";

router.get(commonPath + "getAll", TicketsController.getTickets());
router.post(commonPath + "create", TicketsController.getTickets());
router.post(commonPath + "update", TicketsController.getTickets());
export default router;
