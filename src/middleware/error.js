import logger from '../utils/logger.js';

export default function errorMiddleware(err, req, res, next) {
  logger.error(err?.message || 'Erro interno', err?.stack || '');

  if (res.headersSent) {
    return next(err);
  }

  const status = err.statusCode || 500;

  res.status(status).json({
    success: false,
    message: err.message || 'Erro interno do servidor',
    requestId: req.requestId,
    ...(process.env.NODE_ENV !== 'production' && err.stack ? { stack: err.stack } : {}),
  });
}
