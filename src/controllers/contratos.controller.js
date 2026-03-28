import { createCrudController } from './crudFactory.js';
import service from '../services/contratos.service.js';

const controller = createCrudController(service);

export const listContratos = controller.list;
export const showContratos = controller.show;
export const createContratos = controller.create;
export const updateContratos = controller.update;
export const removeContratos = controller.remove;
