const db = require('../config/database');
const dbFunc = require('../config/db-function');
const msql = require('monologue');

var venueModel = {
   getList:getList,
   add:add,
   update:update,
   remove:remove,
   getById:getById
}

function getList() {
    return new Promise((resolve,reject) => {

          const sql=  msql()
            .insert( 'bm_venues', [
            { username: 'test', password: "123'4", first_name: 'me' },
            { username: 'example', password: 'abcd', first_name: "pasta" }
            ] )
            .sql();


        db.query(`SELECT * from bm_venues where is_active=1`,(error,rows,fields)=>{
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
        db.query("SELECT * FROM bm_venues WHERE id ="+id.id,(error,rows,fields)=>{
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

function add(user) {
     return new Promise((resolve,reject) => {
         db.query("INSERT INTO bm_venues(title,description)VALUES('"+user.name+"','"+user.age+"','"+user.state+"','"+user.country+"')",(error,rows,fields)=>{
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


function update(id,user) {
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


module.exports = venueModel;

