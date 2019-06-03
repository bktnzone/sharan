var db = require('../config/database');
const dbConn = require('../config/db-function');
const msql=dbConn.msql;
const format=dbConn.formatSQL;

var roomModel = {

    getAll:getAll,
    getList:getAll
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

