import { Router } from "express";
import { methodHTTP as creyenteController } from "../controllers/creyente.controller.js";

const router = Router();

router.get("/all", creyenteController.getAll);
router.post("/add", creyenteController.insertData);
router.delete("/del/:id", creyenteController.deleteData);
router.put("/upd/:id", creyenteController.updateData);
router.get("/one/:id", creyenteController.getOne);

export default router;