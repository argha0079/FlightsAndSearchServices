import { Router } from "express";
import * as cityController from "../../controllers/city-controller.js"
import * as airportController from "../../controllers/airport-controller.js"

const router = Router();

router.post("/cities", cityController.create);
router.delete("/cities/:id", cityController.destroy);
router.get("/cities/:id", cityController.get);
router.get("/cities", cityController.getAll);
router.patch("/cities/:id", cityController.update);


router.get("/airports", airportController.getAirportByCity);
export default router;