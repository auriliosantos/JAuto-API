"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const db = knex_1.default({
    client: "pg",
    version: "7.18.2",
    connection: process.env.DATABASE_URI,
});
exports.default = db;
