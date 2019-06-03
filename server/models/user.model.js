var db = require('../config/database');
const dbConn = require('../config/db-function');
const msql=dbConn.msql;
const format=dbConn.formatSQL;

var regUser = {
    //getList:getList,
    //add:add,
    //update:update,
    //remove:remove,
    getById:getById,
    getByEmail:getByEmail
}


async function getByEmail(params) {
    const sql= msql()
    .select( "u.email_id,u.password,u.fullname,u.role_id", 'bm_users u'  )
    .where({'u.is_active':1,'u.email_id':params.email_id})
    .sql();
    console.log(params);
    return  db.query(format(sql));
}

async function getById(params) {
    const sql= msql()
    .select( "u.email_id,u.password,u.fullname,u.role", 'bm_users' )
    .where({'u.is_active':1,'u.id':params.id})
    .sql();
    console.log(params);
    return  db.query(format(sql));
}


module.exports = regUser;

