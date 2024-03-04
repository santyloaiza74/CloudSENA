const mongoose= require('mongoose')

const fichaSchema = new mongoose.Schema({
    nombre:{
        type: String
    },
    codigo:{
        type: String
    },
    fecha_inicio:{
        type: Date
    },
    fecha_fin:{
        type: Date
    },
    tipo:{
        type:String
    },
    gestor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'gestor'
    }],
    aprendiz:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'login'
    }]
  });
  
const Ficha = mongoose.model('ficha', fichaSchema);

module.exports= Ficha