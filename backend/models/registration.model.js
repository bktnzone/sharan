var db = require('../config/database');
const dbConn = require('../config/db-function');
const msql=dbConn.msql;
const format=dbConn.formatSQL;

var regModel = {
    getList:getList,
    add:add,
    update:update,
    remove:remove,
    getById:getById
}

async function getList (params) {
    const sql= msql()
    .select( "r.*,e.title,e.description", 'bm_registrations r' )
    .ljoin( "bm_events e", "e.id = r.event_id" )
    .where({'r.event_id':params.event_id})
    .sql();
    return  db.query(format(sql));
}

async function getById(params) {
    const sql= msql()

    .select( "r.*,e.title,e.description", 'bm_registrations r' )
    .ljoin( "bm_events e", "e.id = r.event_id" )
    .where({'r.id':params.reg_id})
    .sql();
    console.log(params);
    return  db.query(format(sql));
}

function add(reg) {
    const sql=  msql()
    .insert( 'bm_registrations', [reg] )
    .sql();

}


function update(id,reg) {

}

function remove(id) {

}


module.exports = regModel;

