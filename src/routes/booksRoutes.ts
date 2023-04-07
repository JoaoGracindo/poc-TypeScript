import { Router } from "express";
import middlewares from '../middlewares/middlewares.js';
import controllers from '../controllers/controllers.js';
import schema from "../models/schemas.js";

const router = Router();

router.get('/', controllers.getAll);
router.post('/', middlewares.validateSchema(schema), controllers.create);
router.put('/:id', controllers.update);
router.delete('/:id', controllers.remove);

export default router;