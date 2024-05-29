"use strict";

var mongoose = require('mongoose');
var loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  documento: {
    type: String,
    required: true
  },
  ficha: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ficha'
  }],
  rol: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'roles'
  }],
  gestor: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'gestor'
  }]
});
var Login = mongoose.model('login', loginSchema);
module.exports = Login;