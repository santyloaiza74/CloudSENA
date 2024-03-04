const mongoose= require('mongoose')

const proyectoSchema = new mongoose.Schema({
    nombre:{
        type: String
    },
    autores:{
        type: String
    },
    ficha:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ficha'
    }],
    fecha:{
        type:String
    },
    documentacion:{
        type: Array
    },
    descripcion:{
        type: String
    },
    imagenes:{
        type: Array
    },
    video:{
        type: Array
    }
  });
  
const Proyecto = mongoose.model('proyecto', proyectoSchema);

module.exports= Proyecto  