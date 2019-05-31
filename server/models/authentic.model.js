var db = require('../config/database');
const dbConn = require('../config/db-function');
const bcrypt = require('bcryptjs');
const userModel=require('./user.model');



const authenticate =async (authenticData)=> {

    return new Promise(async (resolve,reject)=>{

        const resp=await userModel.getByEmail({email_id:authenticData.email});
        //if(resp.length>0)
           // resolve(resp[0]);
        //else
           // reject({"success":false,"message":"password does not match"});
         bcrypt.compare(authenticData.password, resp[0].password, function (err, isMatch) {
            if (err) {
                reject(error);
            } else if (isMatch) {
                resolve(resp[0]);
            }
            else {
                reject({"success":false,"message":"password does not match"});
            }
        });

    });


}


function signup(user) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                db.query("SELECT * FROM bm_users WHERE username='"+user.username+"'", (error, rows, fields) => {
                    if (error) {
                        dbConn.connectionRelease;
                        reject(error);
                    } else if(rows.length>0) {
                        dbConn.connectionRelease;
                        reject({"success":false,"message":"user already exist ! try with different user"});
                    } else {
                        db.query("INSERT INTO bm_users(username,password)VALUES('" + user.username + "','" + user.password + "')", (error, rows, fields) => {
                            if (error) {
                                dbConn.connectionRelease;
                                reject(error);
                            } else {
                                dbConn.connectionRelease;
                                resolve(rows);
                            }
                        });
                    }
                });
            })

        });
    });
}

var authenticModel = {
    authentic: authenticate,
    signup: signup
}
module.exports = authenticModel;



