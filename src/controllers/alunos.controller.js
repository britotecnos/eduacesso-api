import { createCrudController } from './crudFactory.js';
import service from '../services/alunos.service.js';

const controller = createCrudController(service);

export const listAlunos = controller.list;
export const showAlunos = controller.show;
export const createAlunos = controller.create;
export const updateAlunos = controller.update;
export const removeAlunos = controller.remove;
