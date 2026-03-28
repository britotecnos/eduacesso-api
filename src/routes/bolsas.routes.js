import { Router } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import {
  listBolsas,
  showBolsas,
  createBolsas,
  updateBolsas,
  removeBolsas
} from '../controllers/bolsas.controller.js';

const router = Router();

export default function bolsasRoutes() {
  router.get('/', asyncHandler(listBolsas));
  router.get('/:id', asyncHandler(showBolsas));
  router.post('/', asyncHandler(createBolsas));
  router.put('/:id', asyncHandler(updateBolsas));
  router.delete('/:id', asyncHandler(removeBolsas));
  return router;
}
