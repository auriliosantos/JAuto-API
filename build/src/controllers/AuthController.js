"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthControler {
    async register(request, response) {
        try {
            const { name, password } = request.body;
            const hash = bcryptjs_1.default.hashSync(password, 8);
            await connection_1.default("users").insert({ name, hash });
            return response.status(201).send();
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async login(request, response) {
        const { name, password } = request.body;
        const [{ hash, id }] = await connection_1.default("users")
            .where({ name })
            .select("hash")
            .select("id");
        const isAMatch = bcryptjs_1.default.compareSync(password, hash);
        if (isAMatch) {
            const token = jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET || "", {
                expiresIn: "2 days",
            });
            return response.status(201).send({ name, token });
        }
        return response.status(400).send();
    }
}
exports.default = AuthControler;
