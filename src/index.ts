import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import router from "./routes/index";

const app: Express = express();

//TODO: add urlencoded when connecting to the front end
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at: ${PORT}⚡⚡`));