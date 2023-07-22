import { Router } from "express";
import { methodHTTP as municipioController } from "../controllers/municipio.controller.js";

const router = Router();

router.get("/all", municipioController.getAll);
router.post("/add", municipioController.insertData);
router.delete("/del/:id", municipioController.deleteData);
router.put("/upd/:id", municipioController.updateData);
router.get("/one/:id", municipioController.getOne);

export default router;
