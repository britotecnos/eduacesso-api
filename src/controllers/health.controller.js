import env from '../config/env.js';

export async function healthCheck(req, res) {
  res.json({
    success: true,
    message: 'API online',
    app: env.appName,
    environment: env.nodeEnv,
    requestId: req.requestId,
    timestamp: new Date().toISOString(),
  });
}

export async function home(req, res) {
  res.json({
    success: true,
    name: env.appName,
    version: '1.0.0',
    docs: {
      health: '/health',
      alunos: '/api/alunos',
      cursos: '/api/cursos',
      bolsas: '/api/bolsas',
      candidaturas: '/api/candidaturas',
      creditoEstudantil: '/api/credito-estudantil',
      estagios: '/api/estagios',
      comunicados: '/api/comunicados',
      contratos: '/api/contratos'
    }
  });
}
