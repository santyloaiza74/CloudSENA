const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    autores: {
        type: String
    },
    ficha: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ficha' // Asegúrate de que el nombre del modelo 'Ficha' sea correcto
    }],
    fecha: {
        type: String,
        required: true
    },
    documentacion: {
        type: Array,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagenes: {
        type: Array,
        required: true
    },
    video: {
        type: Array
    },
    confirmationCode: {
        type: String
    }
});

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

module.exports = Proyecto;
