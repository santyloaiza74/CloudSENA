const mongoose= require('mongoose')

const loginSchema = new mongoose.Schema({
    username: {
      type: String,
      allowNull: true
    },
    password: {
      type: String,
      allowNull: true
    },
    nombre:{
        type: String,
        allowNull: true
    },
    documento:{
        type: String,
        allowNull: true
    },
    ficha:{
        type: String,
        allowNull: true
    }
  });
  
  const Login = mongoose.model('login', loginSchema);
  
  module.exports = Login;