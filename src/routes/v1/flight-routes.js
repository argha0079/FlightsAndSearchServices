import { Router } from "express";
import * as flightController from "../../controllers/flight-controller.js"

const router = Router();

router.post("/", flightController.createFlight);
router.get("/", flightController.getAll);


export default router;