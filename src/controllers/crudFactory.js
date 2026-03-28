function parsePagination(query) {
  return {
    page: Number(query.page || 1),
    perPage: Number(query.perPage || 20),
    search: query.search || '',
    sort: query.sort || '-created',
    filter: query.filter || '',
  };
}

export function createCrudController(service) {
  return {
    list: async (req, res) => {
      const result = await service.list(parsePagination(req.query));
      res.json({ success: true, ...result, requestId: req.requestId });
    },

    show: async (req, res) => {
      const item = await service.getById(req.params.id);
      res.json({ success: true, data: item, requestId: req.requestId });
    },

    create: async (req, res) => {
      const item = await service.create(req.body);
      res.status(201).json({ success: true, data: item, requestId: req.requestId });
    },

    update: async (req, res) => {
      const item = await service.update(req.params.id, req.body);
      res.json({ success: true, data: item, requestId: req.requestId });
    },

    remove: async (req, res) => {
      await service.remove(req.params.id);
      res.json({ success: true, message: 'Registro removido com sucesso', requestId: req.requestId });
    }
  };
}
