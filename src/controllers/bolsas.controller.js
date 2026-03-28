import { createCrudController } from './crudFactory.js';
import service from '../services/bolsas.service.js';

const controller = createCrudController(service);

export const listBolsas = controller.list;
export const showBolsas = controller.show;
export const createBolsas = controller.create;
export const updateBolsas = controller.update;
export const removeBolsas = controller.remove;
