var db = require('../config/database');
const dbConn = require('../config/db-function');
const bcrypt = require('bcrypt');

var authenticModel = {
    authentic: authentic,
    signup: signup
}

function authentic(authenticData) {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM bm_users WHERE username ='${authenticData.username}'`, (error, rows, fields) => {
            if (error) {
                reject(error);
            } else {
                bcrypt.compare(authenticData.password, rows[0].password, function (err, isMatch) {
                    if (err) {
                        reject(error);
                    } else if (isMatch) {
                        resolve(rows);
                    }
                    else {
                        reject({"success":false,"message":"password doesnot match"});
                    }
                });

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

module.exports = authenticModel;



