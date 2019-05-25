const regSVC = require("../../services/registration.service");

module.exports = {
  getList: async (req, res, next) => {
    try {
      const result = await regSVC.getList({ event_id: req.query.event_id });
      req.data = { items: result };
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  add: async (req, res, next) => {
    try {
      const regInfo = req.body;
      console.log(req.body);
      const result = await regSVC.add(regInfo);
      req.data = {result:"added"};
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  update: async (req, res, next) => {
    try {
      const regInfo = req.body;
      const result = await regSVC.update(req.params.id,regInfo);
      req.data = { items: result };
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  delete: async (req, res, next) => {
    try {
      const result = await regSVC.delete(  req.params.id  );
      req.data = {};
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  getById: async (req, res, next) => {
    try {
      const result = await regSVC.getById({ reg_id: req.params.id });
      req.data = result;
    } catch (err) {
      req.err = err;
    }
    return next();
  }
};
