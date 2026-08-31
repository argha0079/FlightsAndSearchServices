import { Router } from "express";
import * as cityController from "../../controllers/city-controller.js"

const router = Router();

router.post("/", cityController.create);
router.delete("/:id", cityController.destroy);
router.get("/:id", cityController.get);
router.get("/", cityController.getAll);
router.patch("/:id", cityController.update);

export default router;