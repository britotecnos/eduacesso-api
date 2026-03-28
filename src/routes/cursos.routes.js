import { Router } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import {
  listCursos,
  showCursos,
  createCursos,
  updateCursos,
  removeCursos
} from '../controllers/cursos.controller.js';

const router = Router();

export default function cursosRoutes() {
  router.get('/', asyncHandler(listCursos));
  router.get('/:id', asyncHandler(showCursos));
  router.post('/', asyncHandler(createCursos));
  router.put('/:id', asyncHandler(updateCursos));
  router.delete('/:id', asyncHandler(removeCursos));
  return router;
}
