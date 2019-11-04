const mongoose = require('mongoose')

const alumnoSchema = new mongoose.Schema({
    nombre: String,
    edad: Number
}, 
    {timestamps: true}
)

const Alumno = mongoose.model('alumno', alumnoSchema)
module.exports = Alumno
