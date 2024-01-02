import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from "./routes/auth.route.js";
import ProjectsRoute from "./routes/projects.route.js";

dotenv.config();
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", AuthRoute);
app.use("/api", ProjectsRoute);

app.listen(PORT, () => {
  console.log(`Server started on http://${HOSTNAME}:${PORT}`);
});
