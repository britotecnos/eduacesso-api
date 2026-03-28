import dotenv from 'dotenv';
dotenv.config();

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 3001),
  appName: process.env.APP_NAME || 'EDUACESSO API',
  appUrl: process.env.APP_URL || 'http://localhost:3001',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  pocketbaseUrl: process.env.PB_URL || 'http://127.0.0.1:8090',
  pocketbaseSuperuserEmail: process.env.PB_SUPERUSER_EMAIL || '',
  pocketbaseSuperuserPassword: process.env.PB_SUPERUSER_PASSWORD || '',
  defaultPage: Number(process.env.DEFAULT_PAGE || 1),
  defaultPerPage: Number(process.env.DEFAULT_PER_PAGE || 20),
  maxPerPage: Number(process.env.MAX_PER_PAGE || 100),
};

export default env;
