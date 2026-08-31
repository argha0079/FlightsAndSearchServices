import { Router } from "express";
import * as airportController from "../../controllers/airport-controller.js"

const router = Router();

// Airport routes
router.get("/", airportController.getAirportByCity);
router.post("/", airportController.createAirport);
router.delete("/:id", airportController.destroyAirport);

export default router;