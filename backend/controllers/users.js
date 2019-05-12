const usersModel = require("../models/users");

const get = (req, res) => {
  usersModel.get(req.params.id, (err, result) => {
    console.log(err)
    res.json(result);
  });
};

module.exports = {
  get
};
