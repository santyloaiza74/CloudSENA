const mongoose= require('mongoose')

const proyectoSchema = new mongoose.Schema({
    nombre:{
        type: String
    },
    Autores:{
        type: String
    },
    idficha:{
        type: String
    },
    fecha:{
        type:Date
    }
  });
  
const Proyecto = mongoose.model('proyecto', proyectoSchema);

module.exports= Proyecto  