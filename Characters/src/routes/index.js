import { Router } from "express";
import controllers from "../controllers/index.js";
import middlewares from "../middlewares/index.js";
const router = Router();

router.get("/characters", controllers.getCharacters);
router.get("/characters/:id", controllers.getCharacterId);
router.post(
  "/characters",
  middlewares.charactersValidation,
  controllers.postCharacter
);
export default router;
