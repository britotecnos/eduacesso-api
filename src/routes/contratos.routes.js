import { Router } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import {
  listContratos,
  showContratos,
  createContratos,
  updateContratos,
  removeContratos
} from '../controllers/contratos.controller.js';

const router = Router();

export default function contratosRoutes() {
  router.get('/', asyncHandler(listContratos));
  router.get('/:id', asyncHandler(showContratos));
  router.post('/', asyncHandler(createContratos));
  router.put('/:id', asyncHandler(updateContratos));
  router.delete('/:id', asyncHandler(removeContratos));
  return router;
}
