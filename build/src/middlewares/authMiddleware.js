"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).send({ error: "No token provided" });
    const parts = authHeader.split(" ");
    if (!(parts.length === 2))
        return res.status(401).send({ error: "Token error" });
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: "Malformatted Token" });
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "", (err, decoded) => {
        if (err)
            return res.status(401).send({ error: "Invalid Token" });
        return next();
    });
}
exports.default = authMiddleware;
