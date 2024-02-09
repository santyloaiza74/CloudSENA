const mongoose= require('mongoose')

const loginSchema = new mongoose.Schema({
    email: {
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
    ficha:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ficha'
    }],
    rol:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'roles'
    }],
    gestor:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'gestor'
    }]
  });
  
  const Login = mongoose.model('login', loginSchema);
  
  module.exports = Login;