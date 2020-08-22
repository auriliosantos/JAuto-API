"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class InputsControler {
    async insurers(request, response) {
        try {
            const insurersData = await connection_1.default("insurers").select("insurers.id", "insurers.name");
            return response.json({ insurersData });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async clients(request, response) {
        try {
            const clientsData = await connection_1.default("clients").select("clients.id", "clients.name");
            return response.json({ clientsData });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async usage_types(request, response) {
        try {
            const usage_typesData = await connection_1.default("usage_types").select("usage_types.id", "usage_types.name");
            return response.json({ usage_typesData });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async marital_statuses(request, response) {
        try {
            const marital_statusesData = await connection_1.default("marital_statuses").select("marital_statuses.id", "marital_statuses.name");
            return response.json({ marital_statusesData });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async payment_methods(request, response) {
        try {
            const payment_methodsData = await connection_1.default("payment_methods").select("payment_methods.id", "payment_methods.name");
            return response.json({ payment_methodsData });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async deductible_types(request, response) {
        try {
            const deductible_typesData = await connection_1.default("deductible_types").select("deductible_types.id", "deductible_types.name");
            return response.json({ deductible_typesData });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async vehicles(request, response) {
        try {
            const vehiclesData = await connection_1.default("vehicles").select("vehicles.id", "vehicles.plate", "vehicles.chassis");
            return response.json({ vehiclesData });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
}
exports.default = InputsControler;
