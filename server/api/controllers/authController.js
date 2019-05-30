const authService = require('../../services/auth.service');
const jwt = require('jsonwebtoken');

/*
//Validating the input entity
var json_format = iValidator.json_schema(schema.postSchema, authenticData, "authentic");
if (json_format.valid == false) {
return res.status(422).send(json_format.errorMessage);

*/

module.exports = {

    login:(req,res,next)=>{
        const authenticData=req.body;
        authService.authentic(authenticData).then((data) => {
            if(data.email_id) {
               var emailId = data.email_id;
               const token = jwt.sign({emailId},'my_secret_key',{ expiresIn: 60*60*24 });
               req.data={
                 "success":true,
                // "data":data,
                 "token":token
               };
             }else{
                req.data={
                    "success":false,
                   "error":"invalid username/password"
                  };

             }

             return next();
           });
    }

}