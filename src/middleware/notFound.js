export default function notFoundMiddleware(req, res) {
  res.status(404).json({
    success: false,
    message: 'Rota não encontrada',
    method: req.method,
    path: req.originalUrl,
    requestId: req.requestId,
  });
}
