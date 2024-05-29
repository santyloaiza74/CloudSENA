"use strict";

var express = require('express');
var mongoose = require('mongoose');
var _require = require('./config/config'),
  port = _require.port;
var routerApi = require('./routes/index');
var connect = require('./libs/mongoose');
var createRoles = require('./seeders/rol.seeder');
var cors = require('cors');
var helmet = require('helmet');
var app = express();
connect();
createRoles();
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express["static"]('public'));
app.use(cors());
app.use(helmet());
routerApi(app);
app.listen(port, function () {
  console.log("APP corriendo por el puerto ".concat(port));
});