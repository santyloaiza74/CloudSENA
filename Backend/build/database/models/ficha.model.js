"use strict";

var mongoose = require('mongoose');
var fichaSchema = new mongoose.Schema({
  nombre: {
    type: String
  },
  codigo: {
    type: String,
    required: true
  },
  fecha_inicio: {
    type: String,
    required: true
  },
  fecha_fin: {
    type: String,
    required: true
  },
  tipo: {
    type: String
  },
  gestor: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'gestor'
  }],
  aprendiz: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'aprendiz'
  }]
});
var Ficha = mongoose.model('ficha', fichaSchema);
module.exports = Ficha;