import express, { Router } from 'express';
import { consultLanguage } from '../controllers/language.js';


const router = express.Router();

router.get('/consultarLenguaje', consultLanguage);

export default router;