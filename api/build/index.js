"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db = require('./db/models');
const app = (0, express_1.default)();
const appPort = 8080;
app.listen(appPort);
console.log('Server running on ' + appPort);
