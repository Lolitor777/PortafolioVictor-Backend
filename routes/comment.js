import express, { Router } from "express";
import { consultComment, createComment, deleteComment } from "../controllers/comment.js";

const router = express.Router();

router.get('/consultarComentario', consultComment);
router.post('/crearComentario', createComment);
router.delete('/eliminarComentario/:id', deleteComment);

export default router;