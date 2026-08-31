import { Router } from "express";
import * as airplaneController from "../../controllers/airplane-controller.js"

const router = Router();

// Airplane routes
router.get("/:id", airplaneController.getAirplaneById);
router.get("/", airplaneController.getAllAirplanes);
router.post("/", airplaneController.createAirplane);
router.delete("/:id", airplaneController.destroyAirplane);

export default router;