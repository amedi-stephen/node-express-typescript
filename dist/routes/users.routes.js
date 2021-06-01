"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRoutes = express_1.Router();
userRoutes.get("/", function (request, response) {
    response.send("<h1>List of all the users</h1>");
});
userRoutes.post("/post", function (request, response) {
    response.send(request.body);
});
exports.default = userRoutes;
