const authService = require('../../services/auth.service');
var schema = require('../../common/schema/userValidationSchema.json')
var iValidator = require('../../common/iValidator');
var errorCode = require('../../common/error-code');
var errorMessage = require('../../common/error-methods');

module.exports = {

   login :async (req,res,next)=> {

        try {
           // const result=await userService.getAllUser();
            req.data={"simple":"as"};
            throw new Error("Failed to open File");
        } catch (err) {
            req.err = err;
        }
        return next();
  }
}