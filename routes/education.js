import express, { Router } from "express";
import { consultEducation, createEducation } from "../controllers/education.js";

const router = express.Router();

router.get('/consultarEducacion', consultEducation);
router.post('/crearEducacion', createEducation);

export default router;