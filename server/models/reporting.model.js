var db = require('../config/database');
const dbConn = require('../config/db-function');
const msql=dbConn.msql;
const format=dbConn.formatSQL;


var reportingModel = {
    getEventMetrics:getEventMetrics
}


async function getEventQueries (params) {
    const sql= msql()
    .select( "q.*", "bm_queries q " )
    .where({'q.is_active':1})
    .sql();
    return  db.query(format(sql));
}


async function getEventMetrics (params) {
    const sql= msql()
    .select( "v.*", tableName + ' v' )
    .where({'v.is_active':1})
    .sql();
    return  db.query(format(sql));
}

module.exports = reportingModel;

