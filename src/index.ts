import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import dotenv from "dotenv";

const app: Express = express();

//TODO: add urlencoded when connecting to the front end
app.use(express.json());

app.get("/", (request: Request, response: Response) => {
    response.send({
        hostname: request.hostname,
        path: request.path,
        method: request.method,
    });
});

app.post("/post", (request: Request, response: Response) => {
    response.send(request.body);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at: ${PORT}⚡⚡`));