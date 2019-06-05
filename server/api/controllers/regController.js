const regSVC = require("../../services/registration.service");

module.exports = {
  getList: async (req, res, next) => {
    try {
      console.log(req.user);
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
      if(req.user)
        regInfo.updatedBy=req.user.emailId;
      const result = await regSVC.add(regInfo);
      let actualData = await regSVC.getById({ reg_id:result.insertId});
      req.data = {...actualData};
      return next();
    } catch (err) {
      req.err = err;
      return next(err);
    }

  },

  update: async (req, res, next) => {
    try {
      const { createdAt,updatedAt, description,title,  ...regInfo} = req.body;
      if(req.user)
        regInfo.updatedBy=req.user.emailId;

      const result = await regSVC.update(req.params.id,regInfo);
      let actualData = await regSVC.getById({ reg_id:req.params.id});
      req.data = {...actualData};
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
