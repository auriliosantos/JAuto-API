"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ClientsController_1 = __importDefault(require("./controllers/ClientsController"));
const InsurancesController_1 = __importDefault(require("./controllers/InsurancesController"));
const InsurersController_1 = __importDefault(require("./controllers/InsurersController"));
const VehiclesController_1 = __importDefault(require("./controllers/VehiclesController"));
const InputsController_1 = __importDefault(require("./controllers/InputsController"));
const AuthController_1 = __importDefault(require("./controllers/AuthController"));
const authMiddleware_1 = __importDefault(require("./middlewares/authMiddleware"));
const authController = new AuthController_1.default();
const routes = express_1.default.Router();
routes.post("/auth/login", authController.login);
/* routes.post("/auth/register", authController.register); */
routes.use((req, res, next) => {
    authMiddleware_1.default(req, res, next);
});
const clientsController = new ClientsController_1.default();
const insurancesController = new InsurancesController_1.default();
const insurersController = new InsurersController_1.default();
const vehiclesController = new VehiclesController_1.default();
const inputsController = new InputsController_1.default();
routes.get("/clients", clientsController.index);
routes.post("/clients", clientsController.create);
routes.put("/clients/:id", clientsController.update);
routes.delete("/clients/:id", clientsController.delete);
routes.get("/insurances", insurancesController.index);
routes.post("/insurances", insurancesController.create);
routes.put("/insurances/:id", insurancesController.update);
routes.delete("/insurances/:id", insurancesController.delete);
routes.get("/insurers", insurersController.index);
routes.post("/insurers", insurersController.create);
routes.put("/insurers/:id", insurersController.update);
routes.delete("/insurers/:id", insurersController.delete);
routes.get("/vehicles", vehiclesController.index);
routes.post("/vehicles", vehiclesController.create);
routes.put("/vehicles/:id", vehiclesController.update);
routes.delete("/vehicles/:id", vehiclesController.delete);
routes.get("/input/clients", inputsController.clientsData);
routes.get("/input/insurances", inputsController.insurancesData);
routes.get("/input/vehicles", inputsController.vehiclesData);
exports.default = routes;
