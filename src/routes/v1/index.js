import { Router } from "express";
import * as cityController from "../../controllers/city-controller.js"
import * as airportController from "../../controllers/airport-controller.js"
import * as airplaneController from "../../controllers/airplane-controller.js"

const router = Router();

// City routes
router.post("/cities", cityController.create);
router.delete("/cities/:id", cityController.destroy);
router.get("/cities/:id", cityController.get);
router.get("/cities", cityController.getAll);
router.patch("/cities/:id", cityController.update);

// Airport routes
router.get("/airports", airportController.getAirportByCity);
router.post("/airports", airportController.createAirport);
router.delete("/airports/:id", airportController.destroyAirport);

// Airplane routes
router.get("/airplanes/:id", airplaneController.getAirplaneById);
router.get("/airplanes", airplaneController.getAllAirplanes);
router.post("/airplanes", airplaneController.createAirplane);
router.delete("/airplanes/:id", airplaneController.destroyAirplane);


export default router;