const centreSvc = require("../../services/centre.service");


module.exports = {
  getList: async (req, res, next) => {
    try {
      const result = await centreSvc.getList({ });
      req.data = { items: result };
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  add: async (req, res, next) => {
    try {
      const eventInfo = req.body;
      console.log(req.body);
      const result = await centreSvc.add(eventInfo);
      req.data = {result:"added"};
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  update: async (req, res, next) => {
    try {
      const eventInfo = req.body;
      const result = await centreSvc.update(req.params.id,eventInfo);
      req.data = { items: result };
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  delete: async (req, res, next) => {
    try {
      const result = await centreSvc.delete(  req.params.id  );
      req.data = {};
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  getById: async (req, res, next) => {
    try {
      const result = await centreSvc.getById({ event_id: req.params.id });
      req.data = result;
    } catch (err) {
      req.err = err;
    }
    return next();
  }
};
