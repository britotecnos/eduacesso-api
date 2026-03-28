import { createCrudController } from './crudFactory.js';
import service from '../services/cursos.service.js';

const controller = createCrudController(service);

export const listCursos = controller.list;
export const showCursos = controller.show;
export const createCursos = controller.create;
export const updateCursos = controller.update;
export const removeCursos = controller.remove;
