import { createCrudController } from './crudFactory.js';
import service from '../services/candidaturas.service.js';

const controller = createCrudController(service);

export const listCandidaturas = controller.list;
export const showCandidaturas = controller.show;
export const createCandidaturas = controller.create;
export const updateCandidaturas = controller.update;
export const removeCandidaturas = controller.remove;
