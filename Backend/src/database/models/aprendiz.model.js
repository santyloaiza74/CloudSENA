const mongoose= require('mongoose')

const aprendizSchema = new mongoose.Schema({
    nombre:{
        type: String
    },
    documento:{
        type: String
    },
    ficha:{
        type: String
    }
  });
  
const Aprendiz = mongoose.model('aprendiz', aprendizSchema);

module.exports= Aprendiz  