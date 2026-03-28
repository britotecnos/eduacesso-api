import { createCrudController } from './crudFactory.js';
import service from '../services/estagios.service.js';

const controller = createCrudController(service);

export const listEstagios = controller.list;
export const showEstagios = controller.show;
export const createEstagios = controller.create;
export const updateEstagios = controller.update;
export const removeEstagios = controller.remove;
