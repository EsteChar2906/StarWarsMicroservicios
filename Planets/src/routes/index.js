import { Router } from "express";
import controllers from "../controllers/index.js";
import middlewares from "../middleware/index.js";
const router = Router();

router.get("/planets", controllers.getPlanets);
router.get("/planets/:id", controllers.getPlanetId);
router.post("/planets", middlewares.planetsValidation, controllers.postPlanet);

export default router;
