const userService = require('../../services/user.service');
var schema = require('../../common/schema/userValidationSchema.json')
var iValidator = require('../../common/iValidator');
var errorCode = require('../../common/error-code');
var errorMessage = require('../../common/error-methods');

module.exports = {
   getList :async (req,res,next)=> {
        try {
            const result=await userService.getAllUser();
            req.data=result;
        } catch (err) {
            req.err = err;
        }
        return next();
  },
  getById:(req,res)=> {
    let userId = req.params;
    var json_format = iValidator.json_schema(schema.getSchema,userId,"user");
    if (json_format.valid == false) {
      return res.status(422).send(json_format.errorMessage);
    }

    userService.getUserById(userId).then((data) => {
        res.send(data);
      }).catch((err) => {

        res.send(err);
      });
  },

    addUser:(req,res)=> {
    var userData=req.body;

    //Validating the input entity
     var json_format = iValidator.json_schema(schema.postSchema, userData, "user");
     if (json_format.valid == false) {
       return res.status(422).send(json_format.errorMessage);
     }

    userService.addUser(userData).then((data) => {
      res.json(data);
    }).catch((err) => {

      res.json(err);
    });

  },


    updateUser:(req,res)=> {
     var userData=req.body;
     var id = req.params.id;
     userService.updateUser(id,userData).then((data)=>{
        res.json(data);
    }).catch((err)=>{

        res.json(err);
     });
  },

    deleteUser:(req,res)=> {
    var delId = req.params.id;
    userService.deleteUser(delId).then((data)=>{
      res.json(data);
    }).catch((err)=>{

        res.json(err);
    });
  }

};