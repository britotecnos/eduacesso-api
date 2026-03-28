import { createCrudController } from './crudFactory.js';
import service from '../services/comunicados.service.js';

const controller = createCrudController(service);

export const listComunicados = controller.list;
export const showComunicados = controller.show;
export const createComunicados = controller.create;
export const updateComunicados = controller.update;
export const removeComunicados = controller.remove;
