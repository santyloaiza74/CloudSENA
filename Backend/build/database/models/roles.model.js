"use strict";

var mongoose = require('mongoose');
var rolSchema = new mongoose.Schema({
  name: {
    type: String
  }
});
var Roles = mongoose.model('roles', rolSchema);
module.exports = Roles;