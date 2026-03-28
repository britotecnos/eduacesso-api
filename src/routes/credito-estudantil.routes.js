import { Router } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import {
  listCreditoEstudantil,
  showCreditoEstudantil,
  createCreditoEstudantil,
  updateCreditoEstudantil,
  removeCreditoEstudantil
} from '../controllers/credito-estudantil.controller.js';

const router = Router();

export default function credito_estudantilRoutes() {
  router.get('/', asyncHandler(listCreditoEstudantil));
  router.get('/:id', asyncHandler(showCreditoEstudantil));
  router.post('/', asyncHandler(createCreditoEstudantil));
  router.put('/:id', asyncHandler(updateCreditoEstudantil));
  router.delete('/:id', asyncHandler(removeCreditoEstudantil));
  return router;
}
