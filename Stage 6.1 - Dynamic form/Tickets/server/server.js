import dotenv from "dotenv";

import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.listen(PORT, HOST, () => {
  console.log(`Server is started on http://${HOST}:${PORT}`);
});
