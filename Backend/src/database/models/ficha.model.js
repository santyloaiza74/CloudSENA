const mongoose= require('mongoose')

const fichaSchema = new mongoose.Schema({
    nombre:{
        type: String
    },
    fecha_inicio:{
        type: Date
    },
    fecha_fin:{
        type: Date
    }
  });
  
const Ficha = mongoose.model('ficha', fichaSchema);

module.exports= Ficha