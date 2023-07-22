import { Router } from "express";
import { methodHTTP as comunaController } from "../controllers/comuna.controller.js";

const router = Router();

router.get("/all", comunaController.getAll);
router.post("/add", comunaController.insertData);
router.delete("/del/:id", comunaController.deleteData);
router.put("/upd/:id", comunaController.updateData);
router.get("/one/:id", comunaController.getOne);

export default router;