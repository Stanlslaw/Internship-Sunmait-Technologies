import cors from "cors";
import express, { json } from "express";

import ticketRouter from "./routes/tickets.router.js";

const app = express();

app.use(cors());
app.use(json());
app.use("/api", ticketRouter);

export default app;
