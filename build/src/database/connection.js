"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const db = knex_1.default({
    client: "pg",
    version: "7.18.2",
    connection: "postgres://zudyfbiptbxtcw:321b37ebd0feff4954ed60365a766ba0c98ec77e383b59091811ccbde2975409@ec2-34-236-215-156.compute-1.amazonaws.com:5432/d8ero968q45i6a?ssl=true",
});
exports.default = db;
