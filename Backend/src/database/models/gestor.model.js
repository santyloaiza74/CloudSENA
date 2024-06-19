const mongoose= require('mongoose')

const gestorSchema = new mongoose.Schema({
    nombre:{
        type: String
    },
    documento:{
        type: String
    },
    celular:{
        type: String
    },
    correo:{
        type: String
    },
    contraseña:{
        type: String
    }
  });
  
const Gestor = mongoose.model('gestor', gestorSchema);

module.exports= Gestor