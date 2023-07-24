import { Router } from 'express';
import {getAll, insertData, deleteData, oneData, updateData} from '../controllers/NivelFormacion.controller.js';

const router = Router();

router.get("/all", getAll);

router.post("/add", insertData);

router.delete("/del/:id", deleteData);

router.get("/one/:id", oneData);

router.put("/upd/:id", updateData);


export default router;
