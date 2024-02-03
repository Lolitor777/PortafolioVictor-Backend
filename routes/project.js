import express, { Router } from "express";
import { consultProject, createProject, deleteProject } from "../controllers/project.js";

const router = express.Router();

router.get('/consultarProyecto', consultProject);
router.post('/crearProyecto', createProject);
router.delete('/eliminarProyecto/:id', deleteProject);

export default router;