const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    codigo: {
        type: Number,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    nacionalidad: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    lugar_nacimiento: {
        type: String,
        required: true
    },
    vecindad: {
        type: String,
        required: true
    },
    pueblo: {
        type: String,
        required: true
    },
    com_lugui: {
        type: String,
        required: true
    },
    estado_civil: {
        type: String,
        required: true
    },
    fecha_vencimiento: {
        type: Date,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);