import express, { Request, Response, NextFunction } from "express";

import ClientsController from "./controllers/ClientsController";
import InsurancesController from "./controllers/InsurancesController";
import InsurersController from "./controllers/InsurersController";
import VehiclesController from "./controllers/VehiclesController";
import InputsController from "./controllers/InputsController";
import AuthController from "./controllers/AuthController";
import authMiddleware from "./middlewares/authMiddleware";

const authController = new AuthController();

const routes = express.Router();

routes.post("/auth/login", authController.login);
/* routes.post("/auth/register", authController.register); */

routes.use((req: Request, res: Response, next: NextFunction) => {
  authMiddleware(req, res, next);
});

const clientsController = new ClientsController();
const insurancesController = new InsurancesController();
const insurersController = new InsurersController();
const vehiclesController = new VehiclesController();
const inputsController = new InputsController();

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

routes.get("/input/clients", inputsController.clients);
routes.get("/input/deductible_types", inputsController.deductible_types);
routes.get("/input/insurers", inputsController.insurers);
routes.get("/input/marital_statuses", inputsController.marital_statuses);
routes.get("/input/payment_methods", inputsController.payment_methods);
routes.get("/input/usage_types", inputsController.usage_types);
routes.get("/input/vehicles", inputsController.vehicles);

export default routes;
