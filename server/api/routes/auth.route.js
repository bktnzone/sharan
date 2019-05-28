const ctrl = require('../controllers/authController');
const express = require('express');
const router = express.Router();


router.route('/login').get(ctrl.login);

/*const authenticService = require('../../services/auth.service');
var schema = require('../../common/schema/loginValidationSchema.json')
var iValidator = require('../../common/iValidator');
var errorCode = require('../../common/error-code');
var errorMessage = require('../../common/error-methods');
var mail = require('../../common/mailer.js');


const jwt = require('jsonwebtoken');

function init(router) {
    router.route('/login')
        .post(authentic)
        .get(get1);
    router.route('/signup')
          .post(signup);
}

function get1(req,res) {
  res.status(422).send("simple");
  next();
}

function authentic(req,res) {
  var authenticData=req.body;

  //Validating the input entity
   var json_format = iValidator.json_schema(schema.postSchema, authenticData, "authentic");
   if (json_format.valid == false) {
     return res.status(422).send(json_format.errorMessage);
   }

   authenticService.authentic(authenticData).then((data) => {
   if(data) {
      var username = data.username;
      const token = jwt.sign({username},'my_secret_key',{ expiresIn: 60*60*24 });
      res.json({
        "success":true,
        "data":data,
        "token":token
      });
    }
  }).catch((err) => {
    mail.mail(err);
    res.json(err);
  });

}


function signup(req,res) {
  var signUpData=req.body;

  //Validating the input entity
   var json_format = iValidator.json_schema(schema.postSchema, signUpData, "signUpData");
   if (json_format.valid == false) {
     return res.status(422).send(json_format.errorMessage);
   }

   authenticService.signup(signUpData).then((data) => {
    if(data) {
       res.json({
         "success":true,
         "data":data
       });
     }
   }).catch((err) => {
     mail.mail(err);
     res.json(err);
   });

}



module.exports.init = init;
*/
module.exports=router;



