import { createApp } from './app.js';
import env from './config/env.js';
import logger from './utils/logger.js';

const app = createApp();
const port = env.port;

process.on('uncaughtException', (error) => {
  logger.fatal('uncaughtException', error);
});

process.on('unhandledRejection', (reason) => {
  logger.fatal('unhandledRejection', reason);
});

process.on('SIGINT', () => {
  logger.info('Aplicação interrompida');
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.info('Encerrando aplicação');
  process.exit(0);
});

app.listen(port, () => {
  logger.info(`${env.appName} rodando na porta ${port}`);
});
