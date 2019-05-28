const foodReqSvc = require("../../services/foodReq.service");


module.exports = {
  getList: async (req, res, next) => {
    try {
      const result = await foodReqSvc.getList({});
      req.data = { items: result };
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  add: async (req, res, next) => {
    try {
      const bldgInfo = req.body;
      console.log(req.body);
      const result = await foodReqSvc.add(bldgInfo);
      req.data = {result:"added"};
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  update: async (req, res, next) => {
    try {
      const bldgInfo = req.body;
      const result = await foodReqSvc.update(req.params.id,bldgInfo);
      req.data = { items: result };
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  delete: async (req, res, next) => {
    try {
      const result = await foodReqSvc.delete(  req.params.id  );
      req.data = {};
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  getById: async (req, res, next) => {
    try {
      const result = await foodReqSvc.getById({ event_id: req.params.id });
      req.data = result;
    } catch (err) {
      req.err = err;
    }
    return next();
  }
};
