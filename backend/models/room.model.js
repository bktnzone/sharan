var db = require('../config/database');
var dbFunc = require('../config/db-function');

var roomModel = {
    getList:getList,
    add:add,
    update:update,
    remove:remove,
    getById:getById
}

function getList() {
    return new Promise((resolve,reject) => {
        db.query(`SELECT 1`,(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows[0]);
            }
       });
    });
}

function getById(id) {
    return new Promise((resolve,reject) => {
        db.query("SELECT * FROM test WHERE id ="+id.id,(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });
}

function add(room) {
     return new Promise((resolve,reject) => {
         db.query("INSERT INTO test(name,age,state,country)VALUES('"+user.name+"','"+user.age+"','"+user.state+"','"+user.country+"')",(error,rows,fields)=>{
            if(error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
          });
        });
}


function update(id,room) {
    return new Promise((resolve,reject) => {
        db.query("UPDATE test set name='"+user.name+"',age='"+user.age+"',state='"+user.state+"',country='"+user.country+"' WHERE id='"+id+"'",(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    })
}

function remove(id) {
   return new Promise((resolve,reject) => {
        db.query("DELETE FROM test WHERE id='"+id+"'",(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });
}


module.exports = roomModel;

