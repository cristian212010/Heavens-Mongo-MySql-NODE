import { Router } from "express";
import { methodHTTP as barrioController } from "../controllers/barrio.controller.js";

const router = Router();

router.get("/all", barrioController.getAll);
router.post("/add", barrioController.insertData);
router.delete("/del/:id", barrioController.deleteData);
router.put("/upd/:id", barrioController.updateData);
router.get("/one/:id", barrioController.getOne);

export default router;