
var bodyParser = require('body-parser')
const sharanApp = require('../api/api-routes');
const express = require('express');

const initSharanApp = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(sharanApp);
  return app;
}

module.exports=initSharanApp;