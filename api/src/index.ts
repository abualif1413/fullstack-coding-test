import express from "express";
const db = require('./db/models');

const app = express();
const appPort = 8080;

app.listen(appPort);
console.log('Server running on ' + appPort);