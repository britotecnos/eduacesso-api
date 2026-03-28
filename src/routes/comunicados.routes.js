import { Router } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import {
  listComunicados,
  showComunicados,
  createComunicados,
  updateComunicados,
  removeComunicados
} from '../controllers/comunicados.controller.js';

const router = Router();

export default function comunicadosRoutes() {
  router.get('/', asyncHandler(listComunicados));
  router.get('/:id', asyncHandler(showComunicados));
  router.post('/', asyncHandler(createComunicados));
  router.put('/:id', asyncHandler(updateComunicados));
  router.delete('/:id', asyncHandler(removeComunicados));
  return router;
}
