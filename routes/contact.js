import express, { Router } from "express";
import { createContact } from "../controllers/contact.js";

const router = express.Router();

router.post('/crearContacto', (createContact));

export default router;