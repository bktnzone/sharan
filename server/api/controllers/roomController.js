const roomSvc = require("../../services/room.service");


module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await roomSvc.getAll({venue_id:1 });
      req.data = { items: result };
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  getList: async (req, res, next) => {
    try {
      const result = await roomSvc.getList({ building_id: req.query.building_id });
      req.data = { items: result };
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  add: async (req, res, next) => {
    try {
      const roomInfo = req.body;
      console.log(req.body);
      const result = await roomSvc.add(roomInfo);
      req.data = {result:"added"};
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  update: async (req, res, next) => {
    try {
      const roomInfo = req.body;
      const result = await roomSvc.update(req.params.id,roomInfo);
      req.data = { items: result };
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  delete: async (req, res, next) => {
    try {
      const result = await roomSvc.delete(  req.params.id  );
      req.data = {};
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  getById: async (req, res, next) => {
    try {
      const result = await roomSvc.getById({ event_id: req.params.id });
      req.data = result;
    } catch (err) {
      req.err = err;
    }
    return next();
  }
};
