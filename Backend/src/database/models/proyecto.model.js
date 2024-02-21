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
        type:Date
    },
    documentacion:{
        type: String
    },
    descripcion:{
        type: String
    },
    imagenes:{
        type:String
    },
    video:{
        type:String
    }
  });
  
const Proyecto = mongoose.model('proyecto', proyectoSchema);

module.exports= Proyecto  