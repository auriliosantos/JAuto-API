import express from "express";

import ClientsController from "./controllers/ClientsController";
import InsurancesController from "./controllers/InsurancesController";
import InsurersController from "./controllers/InsurersController";
import VehiclesController from "./controllers/VehiclesController";

const routes = express.Router();
const clientsController = new ClientsController();
const insurancesController = new InsurancesController();
const insurersController = new InsurersController();
const vehiclesController = new VehiclesController();

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

export default routes;
