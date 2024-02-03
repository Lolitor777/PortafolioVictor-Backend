import express, { Router } from 'express';
import { consultPhotos } from '../controllers/photo.js';

const router = express.Router();

router.get('/consultarFotos', consultPhotos);

export default router;