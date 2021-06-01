import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (request, response) => {
    response.send("<h1>List of all the users</h1>");
});

userRoutes.post("/post", (request, response) => {
    response.send(request.body);
});

export default userRoutes;
