import { Router } from "express";
import cityRouter from "./city-routes.js"
import airplaneRouter from "./airplane-routes.js"
import airportRouter from "./airport-routes.js"
import flightRouter from "./flight-routes.js"

const router = Router();

router.use("/cities", cityRouter);
router.use("/airplanes", airplaneRouter);
router.use("/airports", airportRouter);
router.use("/flights", flightRouter);

export default router;