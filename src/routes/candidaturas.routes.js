import { Router } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import {
  listCandidaturas,
  showCandidaturas,
  createCandidaturas,
  updateCandidaturas,
  removeCandidaturas
} from '../controllers/candidaturas.controller.js';

const router = Router();

export default function candidaturasRoutes() {
  router.get('/', asyncHandler(listCandidaturas));
  router.get('/:id', asyncHandler(showCandidaturas));
  router.post('/', asyncHandler(createCandidaturas));
  router.put('/:id', asyncHandler(updateCandidaturas));
  router.delete('/:id', asyncHandler(removeCandidaturas));
  return router;
}
