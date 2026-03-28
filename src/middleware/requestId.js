export default function requestIdMiddleware(req, res, next) {
  req.requestId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  res.setHeader('X-Request-Id', req.requestId);
  next();
}
