import { Router } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import {
  listEstagios,
  showEstagios,
  createEstagios,
  updateEstagios,
  removeEstagios
} from '../controllers/estagios.controller.js';

const router = Router();

export default function estagiosRoutes() {
  router.get('/', asyncHandler(listEstagios));
  router.get('/:id', asyncHandler(showEstagios));
  router.post('/', asyncHandler(createEstagios));
  router.put('/:id', asyncHandler(updateEstagios));
  router.delete('/:id', asyncHandler(removeEstagios));
  return router;
}
