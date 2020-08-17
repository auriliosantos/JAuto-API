"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
require("dotenv").config({ path: __dirname + "/src/.env" });
module.exports = {
    client: "pg",
    version: "7.18.2",
    connection: process.env.DATABASE_URI,
    migrations: {
        directory: path_1.default.resolve(__dirname, "src", "database", "migrations"),
    },
};
