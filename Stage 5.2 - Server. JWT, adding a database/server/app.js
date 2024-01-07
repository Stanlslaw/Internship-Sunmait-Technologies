import express from "express";

import cors from "cors";
import AuthRoute from "./routes/auth.route.js";
import ProjectsRoute from "./routes/projects.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", AuthRoute);
app.use("/api", ProjectsRoute);

export default app;
