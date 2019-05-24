const db = require('./database');
const monologue = require('monologue');
//console.log("db",db);

const formatSQL=(sql)=>{
    return sql.replace(/`/g,'');
}

function connectionCheck() {
    return new Promise((resolve,reject) => {
      db.getConnection(function(err, connection) {
               if(err) {
                   if(connection) connection.release();
                 reject(err)
              } else  {
                resolve('success')
              }
          })
      })
  }

function connectionRelease() {
    db.on('release', function (connection) {
        console.log('Connection %d released', connection.threadId);
    });
}

module.exports = {
    connectionCheck:connectionCheck(),
    connectionRelease:connectionRelease(),
    msql:monologue,
    formatSQL:formatSQL
}


