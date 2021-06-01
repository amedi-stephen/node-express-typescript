"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var articleRoutes = express_1.Router();
articleRoutes.get("/", function (request, response) {
    response.send("<h1>This are the list of articles</h1>");
});
articleRoutes.post("/post", function (request, response) {
    response.send(request.body);
});
exports.default = articleRoutes;
