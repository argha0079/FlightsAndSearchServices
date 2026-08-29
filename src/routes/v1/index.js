import { Router } from "express";
import * as cityController from "../../controllers/city-controller.js"

const router = Router();

router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
router.get("/city/:id", cityController.get);
router.patch("/city/:id", cityController.update);

export default router;