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
    .select( "E.*", 'bm_events E' )
    .ljoin( "bm_venues V", "V.id = E.venue_id" )
    .where({'E.venue_id':params.venue_id})
    .sql();
    return  db.query(format(sql));
}

async function getById(params) {
    const sql= msql()

    .select( "E.*", 'bm_events E' )
    .ljoin( "bm_venues V", "V.id = E.venue_id" )
    .where({'E.id':params.event_id})
    .sql();
    console.log(format(sql));
    return  db.query(format(sql));
}

async function add(eventInfo) {
    const sql=  msql()
    .insert( 'bm_events', [eventInfo] )
    .sql();
    console.log(format(sql));
    return  db.query(format(sql));
}


async function update(id,eventInfo) {
    const sql=  msql()
    .update( "bm_events", eventInfo )
    .where( {id: id} )
    .sql();
    console.log(format(sql));
    return  db.query(format(sql));

}

async  function remove(id) {
    const sql=  msql()
    .delete( "bm_events" )
    .where( {id: id} )
    .sql();
    console.log(format(sql));
    return  db.query(format(sql));

}


module.exports = regModel;

