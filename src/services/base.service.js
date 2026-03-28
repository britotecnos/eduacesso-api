import { getPocketBase } from '../config/pocketbase.js';

export default class BaseService {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  async collection() {
    const pb = await getPocketBase();
    return pb.collection(this.collectionName);
  }

  async list({ page = 1, perPage = 20, sort = '-created', filter = '', search = '' } = {}) {
    const collection = await this.collection();
    const finalFilter = [filter, search].filter(Boolean).join(' && ');
    const records = await collection.getList(page, perPage, {
      sort,
      filter: finalFilter || undefined,
    });

    return {
      page: records.page,
      perPage: records.perPage,
      totalPages: records.totalPages,
      totalItems: records.totalItems,
      data: records.items,
    };
  }

  async getById(id) {
    const collection = await this.collection();
    return collection.getOne(id);
  }

  async create(payload) {
    const collection = await this.collection();
    return collection.create(payload);
  }

  async update(id, payload) {
    const collection = await this.collection();
    return collection.update(id, payload);
  }

  async remove(id) {
    const collection = await this.collection();
    return collection.delete(id);
  }
}
