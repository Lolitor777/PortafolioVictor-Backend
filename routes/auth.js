import express, { Router } from "express";
import { consultUserById, createUser, login, logout } from "../controllers/auth.js";
import validateJWT from '../middlewares/validateJWT.js'

const router = express.Router()

router.get('/consultarUsuarioPorId/:id', consultUserById);
router.post('/crearUsuario', createUser);
router.post('/login', login);
router.post('/logout', validateJWT, logout);
router.post('/renovarToken', validateJWT, )

export default router;
