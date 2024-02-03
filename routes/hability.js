import express, { Router } from "express";
import { consultHability, createHability } from "../controllers/hability.js";

const router = express.Router();

router.get('/consultarHabilidad', consultHability);
router.post('/crearHabilidad', createHability);

export default router;