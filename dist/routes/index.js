"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var articles_routes_1 = __importDefault(require("./articles.routes"));
var router = express_1.Router();
router.use("/articles", articles_routes_1.default);
router.use("/users", articles_routes_1.default);
exports.default = router;
