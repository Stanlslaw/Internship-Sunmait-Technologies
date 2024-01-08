import express from "express";
import db, {CardsData} from "./database/db.js"
import cors from "cors";
import AuthRoute from "./routes/auth.route.js";
import ProjectsRoute from "./routes/projects.route.js";
import {Cards, Users} from "./database/models/models.js";

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api", AuthRoute);
app.use("/api", ProjectsRoute);
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
export default app;
