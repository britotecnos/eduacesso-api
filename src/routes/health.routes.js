import { Router } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import { healthCheck, home } from '../controllers/health.controller.js';

const router = Router();

export default function healthRoutes() {
  router.get('/', asyncHandler(home));
  router.get('/health', asyncHandler(healthCheck));
  return router;
}
