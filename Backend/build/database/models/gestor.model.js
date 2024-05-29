"use strict";

var mongoose = require('mongoose');
var gestorSchema = new mongoose.Schema({
  nombre: {
    type: String
  },
  documento: {
    type: String
  },
  celular: {
    type: String
  },
  correo: {
    type: String
  },
  ficha: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ficha'
  }]
});
var Gestor = mongoose.model('gestor', gestorSchema);
module.exports = Gestor;