const express = require("express");
const app = express();
const path  = require('path');
const httpStatus = require('http-status');
const jwt = require('./middlewares/jwt');
const apiRoutes = require('./api-routes');
const authRoute = require('./routes/auth.route');
const dbfunc = require('../config/db-function');
const bodyParser = require('body-parser');
const checkToken = require('./secureRoute');
const  APIError  =require("../common/APIError");

dbfunc.connectionCheck.then((data) =>{
    console.log("Connected to DB");
 }).catch((err) => {
     console.log(err);
 });

 app.use('/', express.static('public'));

 app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',jwt());
app.use('/api',apiRoutes);

//app.use('/api',apiRoutes);
// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  return next(err);
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new APIError("Not found", httpStatus.NOT_FOUND,true);
  return next();
});


// error handler, send stacktrace only during development
app.use((err, req, res, next) => // eslint-disable-line no-unused-var
 { if(!err.status) err.status=500;
  res.status(err.status).json({
    err: err.isPublic ? err.message : httpStatus[err.status],
    stack: process.env != 'development' ? err.stack : {}

  })
}
);



var ApiConfig = {
  app: app
}

module.exports = ApiConfig;
