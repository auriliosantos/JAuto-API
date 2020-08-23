"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class InputsControler {
    async clientsData(request, response) {
        try {
            const marital_statusesData = await connection_1.default("marital_statuses").select("marital_statuses.id", "marital_statuses.name");
            return response.json({ marital_statusesData });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async vehiclesData(request, response) {
        try {
            const ownerData = await connection_1.default("clients").select("clients.id", "clients.name");
            const usage_typesData = await connection_1.default("usage_types").select("usage_types.id", "usage_types.name");
            return response.json({ ownerData, usage_typesData });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
    async insurancesData(request, response) {
        try {
            const insurersData = await connection_1.default("insurers").select("insurers.id", "insurers.name");
            const vehiclesData = await connection_1.default("vehicles").select("vehicles.id", "vehicles.plate", "vehicles.chassis");
            const deductible_typesData = await connection_1.default("deductible_types").select("deductible_types.id", "deductible_types.name");
            const payment_methodsData = await connection_1.default("payment_methods").select("payment_methods.id", "payment_methods.name");
            return response.json({
                insurersData,
                vehiclesData,
                deductible_typesData,
                payment_methodsData,
            });
        }
        catch (err) {
            return response.status(500).send();
        }
    }
}
exports.default = InputsControler;
