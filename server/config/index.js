const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '192.168.1.5',
  user     : 'root',
  password : 'root',
  database : 'bk_sharan'
});


module.exports = {
  connection
}