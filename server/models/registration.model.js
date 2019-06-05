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
    .select( "r.*,b.title as btitle,rm.floor_no,rm.room_title,e.title,e.description", 'bm_registrations r' )
    .ljoin( "bm_events e", "e.id = r.event_id" )
    .ljoin( "bm_room_allotments ra", "ra.reg_id = r.id and ra.event_id=r.event_id" )
    .ljoin( "bm_rooms_master rm", "rm.id = ra.room_id and ra.is_active=1" )
    .ljoin( "bm_buildings b", "rm.building_id = b.id" )
    .where({'r.event_id':params.event_id,'r.is_active':1})
    .sql();
    console.log(format(sql));
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

async function add(regInfo) {
    regInfo.is_active=1;
    const sql=  msql()
    .insert( 'bm_registrations', [regInfo] )
    .sql();
    console.log(format(sql));
    return  db.query(format(sql));
}


async function update(id,regInfo) {
    if(!(regInfo.is_active===0))
            regInfo.is_active=1;
    const sql=  msql()
    .update( "bm_registrations", regInfo )
    .where( {id: id} )
    .sql();
    console.log(format(sql));
    return  db.query(format(sql));

}

async  function remove(id) {
    const sql=  msql()
    .delete( "bm_registrations" )
    .where( {id: id} )
    .sql();
    console.log(format(sql));
    return  db.query(format(sql));

}


module.exports = regModel;

