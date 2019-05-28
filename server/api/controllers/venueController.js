const venueSvc = require("../../services/venue.service");


module.exports = {
  getList: async (req, res, next) => {
    try {
      const result = await venueSvc.getList({});
      req.data = { items: result };
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  add: async (req, res, next) => {
    try {
      const venueInfo = req.body;
      console.log(req.body);
      const result = await venueSvc.add(venueInfo);
      req.data = {result:"added"};
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  update: async (req, res, next) => {
    try {
      const venueInfo = req.body;
      const result = await venueSvc.update(req.params.id,venueInfo);
      req.data = { items: result };
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  delete: async (req, res, next) => {
    try {
      const result = await venueSvc.delete(  req.params.id  );
      req.data = {};
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  getById: async (req, res, next) => {
    try {
      const result = await venueSvc.getById({ event_id: req.params.id });
      req.data = result;
    } catch (err) {
      req.err = err;
    }
    return next();
  }
};
