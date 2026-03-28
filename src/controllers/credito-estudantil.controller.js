import { createCrudController } from './crudFactory.js';
import service from '../services/credito-estudantil.service.js';

const controller = createCrudController(service);

export const listCreditoEstudantil = controller.list;
export const showCreditoEstudantil = controller.show;
export const createCreditoEstudantil = controller.create;
export const updateCreditoEstudantil = controller.update;
export const removeCreditoEstudantil = controller.remove;
