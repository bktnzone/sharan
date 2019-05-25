var db = require('../config/database');
const dbConn = require('../config/db-function');
const msql=dbConn.msql;
const format=dbConn.formatSQL;

const tableName="bm_buildings";

var buildingModel = {
    getList:getList,
    add:add,
    update:update,
    remove:remove,
    getById:getById
}

async function getList (params) {
    const sql= msql()
    .select( "v.*", tableName + ' v' )
    .where({'v.is_active':1})
    .sql();
    return  db.query(format(sql));
}

async function getById(params) {
     const sql= msql()
    .select( "v.*", tableName + ' v' )
    .where({'v.id':params.bldg_id})
    .sql();
    console.log(params);
    return  db.query(format(sql));
}

async function add(bldgInfo) {
    const sql=  msql()
    .insert( tableName, [bldgInfo] )
    .sql();
    console.log(format(sql));
    return  db.query(format(sql));
}


async function update(id,bldgInfo) {
    const sql=  msql()
    .update( tableName, bldgInfo )
    .where( {id: id} )
    .sql();
    console.log(format(sql));
    return  db.query(format(sql));

}

async  function remove(id) {
    const sql=  msql()
    .delete( tableName )
    .where( {id: id} )
    .sql();
    console.log(format(sql));
    return  db.query(format(sql));

}


module.exports = buildingModel;

