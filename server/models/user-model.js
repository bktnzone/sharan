var db = require('../config/database');
const dbConn = require('../config/db-function');

var userModel = {
   getAllUser:getAllUser,
   addUser:addUser,
   updateUser:updateUser,
   deleteUser:deleteUser,
   getUserById:getUserById
}

function getAllUser() {
    return new Promise((resolve,reject) => {
        db.query(`select * from bm_users`,(error,rows,fields)=>{
            if(!!error) {
                dbConn.connectionRelease;
                reject(error);
            } else {
                dbConn.connectionRelease;
                resolve(rows[0]);
            }
       });
    });
}

function getUserById(id) {
    return new Promise((resolve,reject) => {
        db.query("SELECT * FROM bm_venues WHERE id ="+id.id,(error,rows,fields)=>{
            if(!!error) {
                dbConn.connectionRelease;
                reject(error);
            } else {
                dbConn.connectionRelease;
                resolve(rows);
            }
       });
    });
}

function addUser(user) {
     return new Promise((resolve,reject) => {
         db.query("INSERT INTO test(name,age,state,country)VALUES('"+user.name+"','"+user.age+"','"+user.state+"','"+user.country+"')",(error,rows,fields)=>{
            if(error) {
                dbConn.connectionRelease;
                reject(error);
            } else {
                dbConn.connectionRelease;
                resolve(rows);
            }
          });
        });
}


function updateUser(id,user) {
    return new Promise((resolve,reject) => {
        db.query("UPDATE test set name='"+user.name+"',age='"+user.age+"',state='"+user.state+"',country='"+user.country+"' WHERE id='"+id+"'",(error,rows,fields)=>{
            if(!!error) {
                dbConn.connectionRelease;
                reject(error);
            } else {
                dbConn.connectionRelease;
                resolve(rows);
            }
       });
    })
}

function deleteUser(id) {
   return new Promise((resolve,reject) => {
        db.query("DELETE FROM test WHERE id='"+id+"'",(error,rows,fields)=>{
            if(!!error) {
                dbConn.connectionRelease;
                reject(error);
            } else {
                dbConn.connectionRelease;
                resolve(rows);
            }
       });
    });
}


module.exports = userModel;

