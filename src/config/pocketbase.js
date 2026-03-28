import PocketBase from 'pocketbase';
import env from './env.js';
import logger from '../utils/logger.js';

let pbInstance;
let authPromise;

async function ensureAuth(pb) {
  if (pb.authStore.isValid) return pb;
  if (!env.pocketbaseSuperuserEmail || !env.pocketbaseSuperuserPassword) {
    logger.warn('Credenciais do PocketBase não configuradas. Algumas rotas podem falhar.');
    return pb;
  }
  if (!authPromise) {
    authPromise = pb.collection('_superusers')
      .authWithPassword(env.pocketbaseSuperuserEmail, env.pocketbaseSuperuserPassword)
      .catch((error) => {
        authPromise = null;
        throw error;
      });
  }
  await authPromise;
  return pb;
}

export async function getPocketBase() {
  if (!pbInstance) {
    pbInstance = new PocketBase(env.pocketbaseUrl);
    pbInstance.autoCancellation(false);
  }
  return ensureAuth(pbInstance);
}
