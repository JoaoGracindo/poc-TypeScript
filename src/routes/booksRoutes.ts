import { Router } from "express";
import middlewares from '../middlewares/middlewares.js';
import controllers from '../controllers/controllers.js';
import schema from "../models/schemas.js";

const router = Router();

router.get('/');
router.post('/');
router.put('/:id');
router.delete('/:id');

export default router;