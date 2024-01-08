import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();
dotenv.config();

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;
app.listen(PORT, () => {
  console.log(`Server started on http://${HOSTNAME}:${PORT}`);
});
