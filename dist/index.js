"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
//TODO: add urlencoded when connecting to the front end
app.use(express_1.default.json());
app.get("/", function (request, response) {
    response.send({
        hostname: request.hostname,
        path: request.path,
        method: request.method,
    });
});
app.post("/post", function (request, response) {
    response.send(request.body);
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server running at: " + PORT + "\u26A1\u26A1"); });
