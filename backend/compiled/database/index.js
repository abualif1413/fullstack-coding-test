"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user = 'postgres';
const host = 'localhost';
const database = 'fullstack-coding-test';
const password = '12345';
const port = 5432;
const sequelize = new sequelize_1.Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false
});
