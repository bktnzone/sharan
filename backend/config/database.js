const mysql = require('mysql');

module.exports = mysql.createPool({
    connectionLimit : 100,
    host : '192.168.1.5',
    user :  'root',
    password: 'root',
    database: 'bk_sharan'
})





