import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import env from './config/env.js';
import routes from './routes/index.js';
import { errorMiddleware, notFoundMiddleware, requestIdMiddleware } from './middleware/index.js';

export function createApp() {
  const app = express();

  app.disable('x-powered-by');
  app.use(helmet());
  app.use(cors({
    origin: env.corsOrigin === '*' ? true : env.corsOrigin.split(',').map(item => item.trim()),
    credentials: true,
  }));
  app.use(morgan('combined'));
  app.use(express.json({ limit: '2mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(requestIdMiddleware);

  app.use('/', routes());

  app.use(notFoundMiddleware);
  app.use(errorMiddleware);

  return app;
}
