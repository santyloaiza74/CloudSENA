const mongoose= require('mongoose')

const fichaSchema = new mongoose.Schema({
    nombre:{
        type: String
    },
    codigo:{
        type: String
    },
    fecha_inicio:{
        type: String
    },
    fecha_fin:{
        type: String
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
        ref:'aprendiz'
    }]
  });
  
const Ficha = mongoose.model('ficha', fichaSchema);

module.exports= Ficha