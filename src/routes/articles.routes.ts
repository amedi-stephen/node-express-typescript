import { Router } from "express";

const articleRoutes = Router();

articleRoutes.get("/", (request, response) => {
    response.send("<h1>This are the list of articles</h1>");
});

articleRoutes.post("/post", (request, response) => {
    response.send(request.body);
})

export default articleRoutes;