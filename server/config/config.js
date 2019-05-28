const configVars={

    db_host: process.env.MYSQL_HOST,
    db_port: process.env.MYSQL_PORT,
    db_name: process.env.MYSQL_DB_NAME,
    db_username: process.env.MYSQL_DB_USERNAME,
    db_password: process.env.MYSQL_DB_PASSWORD,
    port: process.env.PORT
  };

  console.log(configVars);
//let socketPath = `/cloudsql/${process.env.MYSQL_PROXY}`;
//configVars.socketPath=socketPath;
module.exports = configVars