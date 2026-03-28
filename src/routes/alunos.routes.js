import { Router } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import {
  listAlunos,
  showAlunos,
  createAlunos,
  updateAlunos,
  removeAlunos
} from '../controllers/alunos.controller.js';

const router = Router();

export default function alunosRoutes() {
  router.get('/', asyncHandler(listAlunos));
  router.get('/:id', asyncHandler(showAlunos));
  router.post('/', asyncHandler(createAlunos));
  router.put('/:id', asyncHandler(updateAlunos));
  router.delete('/:id', asyncHandler(removeAlunos));
  return router;
}
