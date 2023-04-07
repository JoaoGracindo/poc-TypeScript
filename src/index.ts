import express, { json } from "express";
import router from "./routes/booksRoutes.js";

const app = express();
app.use(json());
app.use(router);

app.listen(5000, () => console.log("Server is running..."));
