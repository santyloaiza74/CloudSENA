"use strict";

var mongoose = require('mongoose');
var _require = require('../config/config'),
  dbHost = _require.dbHost,
  dbPort = _require.dbPort,
  dbName = _require.dbName,
  dbNameCloud = _require.dbNameCloud,
  dbUsername = _require.dbUsername,
  dbPassword = _require.dbPassword;
var DB_URICLOUD = "mongodb+srv://".concat(dbUsername, ":").concat(dbPassword, "@").concat(dbNameCloud, ".pkkyfqz.mongodb.net/");
var DB_URI = "mongodb://".concat(dbHost, ":").concat(dbPort, "/").concat(dbName);
var connect = function connect() {
  try {
    mongoose.connect(DB_URICLOUD);
    console.log("DB CONNECT!!!!!");
  } catch (error) {
    console.log("Error en la conexion: ".concat(error));
  }
};
module.exports = connect;