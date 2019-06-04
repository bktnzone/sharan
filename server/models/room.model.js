var db = require('../config/database');
const dbConn = require('../config/db-function');
const msql=dbConn.msql;
const format=dbConn.formatSQL;

var roomModel = {

    getAll:getAll,
    getList:getAll,
    addAllotment:addAllotment,
    updateAllotment:updateAllotment,
    getAllotments:getAllotments
}


async function updateAllotment(id,allotmentInfo) {
    if(!(allotmentInfo.is_active===0))
            allotmentInfo.is_active=1;
    const sql=  msql()
    .update( "bm_room_allotments", allotmentInfo )
    .where( {id: id} )
    .sql();
    console.log(format(sql));
    return  db.query(format(sql));

}


function addAllotment(allotmentInfo) {
    allotmentInfo.is_active=1;
    const sql=  msql()
    .insert( 'bm_room_allotments', [allotmentInfo] )
    .sql();
    console.log(format(sql));
    return  db.query(format(sql));
}

function getAllotments(params) {
    const sql= msql()
    .select( "a.*,rm.room_no,rm.floor_no, rm.building_id,r.fullname,r.leaving_date,r.is_sevadhari", 'bm_room_allotments a' )
    .ljoin("bm_registrations r","r.id=a.reg_id")
    .ljoin("bm_rooms_master rm","rm.id=a.room_id")
    .where({'a.is_active':1,'rm.building_id':params.building_id,'rm.floor_no':params.floor_no})
    .sql();
    return  db.query(format(sql));
}

function getAll() {
    const sql= msql()
    .select( "r.*,b.title as btitle,b.description as building_desc", 'bm_rooms_master r' )
    .ljoin("bm_buildings b","r.building_id=b.id")
    .where({'r.is_active':1})
    .sql();
    return  db.query(format(sql));
}


module.exports = roomModel;

