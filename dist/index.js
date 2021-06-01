"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
//TODO: add urlencoded when connecting to the front end
app.use(express_1.default.json());
app.use(index_1.default);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server running at: " + PORT + "\u26A1\u26A1"); });
