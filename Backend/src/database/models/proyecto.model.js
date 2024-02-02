const mongoose= require('mongoose')

const proyectoSchema = new mongoose.Schema({
    nombre:{
        type: String
    },
    Autores:{
        type: String
    },
    ficha:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ficha'
    }],
    fecha:{
        type:Date
    },
    ruta:{
        type: String
    }
  });
  
const Proyecto = mongoose.model('proyecto', proyectoSchema);

module.exports= Proyecto  