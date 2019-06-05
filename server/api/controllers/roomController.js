const roomSvc = require("../../services/room.service");


module.exports = {

  saveAllotment: async (req, res, next) => {
    try {
      //,venue_id:req.query.venue_id
      let body=req.body;
      let params={venue_id:1,event_id:req.query.event_id,data:{room_id:body.room_id,reg_id:body.reg_id,is_cot:body.is_cot}};
      if(body.allotment_id) params.data.allotment_id=body.allotment_id;

      const result = await roomSvc.saveAllotment(params);
      req.data = { items: result };
    } catch (err) {
      req.err = err;
    }
    return next();
  },

  getAllotments: async (req, res, next) => {
    try {
      let params=req.query;
      const result = await roomSvc.getAllotments(params);
      req.data = { items: result,query:params };
    } catch (err) {
      req.err = err;
    }
    return next();
  },
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
