const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bk_sharan'
});

console.log("running mysql.createConnection")

module.exports = {
  connection
}