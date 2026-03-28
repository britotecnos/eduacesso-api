import { Router } from 'express';
import healthRoutes from './health.routes.js';
import alunosRoutes from './alunos.routes.js';
import cursosRoutes from './cursos.routes.js';
import bolsasRoutes from './bolsas.routes.js';
import candidaturasRoutes from './candidaturas.routes.js';
import credito_estudantilRoutes from './credito-estudantil.routes.js';
import estagiosRoutes from './estagios.routes.js';
import comunicadosRoutes from './comunicados.routes.js';
import contratosRoutes from './contratos.routes.js';

export default function routes() {
  const router = Router();

  router.use('/', healthRoutes());
  router.use('/api/alunos', alunosRoutes());
  router.use('/api/cursos', cursosRoutes());
  router.use('/api/bolsas', bolsasRoutes());
  router.use('/api/candidaturas', candidaturasRoutes());
  router.use('/api/credito-estudantil', credito_estudantilRoutes());
  router.use('/api/estagios', estagiosRoutes());
  router.use('/api/comunicados', comunicadosRoutes());
  router.use('/api/contratos', contratosRoutes());

  return router;
}
