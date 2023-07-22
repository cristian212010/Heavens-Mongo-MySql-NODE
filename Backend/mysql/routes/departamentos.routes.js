import { Router } from "express";
import { methodHTTP as departamentoController } from "../controllers/departamento.controller.js";

const router = Router();

router.get("/all", departamentoController.getAll);
router.post("/add", departamentoController.insertData);
router.delete("/del/:id", departamentoController.deleteData);
router.put("/upd/:id", departamentoController.updateData);
router.get("/one/:id", departamentoController.getOne);

export default router;
