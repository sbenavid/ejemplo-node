const Alumno = require('../models/alumno')
const express = require('express')
const router = new express.Router()

router.post('/api/alumno', (req, res) => {
    console.log('Agregar nueva data...')
    const nuevoAlumno = new Alumno(req.body)
    console.log(nuevoAlumno)

    try {
        nuevoAlumno.save()
        res.send(nuevoAlumno)
    } catch (e) {
        console.log(e)
        res.status(500).send(e.message)
    }
})

router.patch('/api/alumno/:id', async (req, res) => {    

    try {
        const alumno = await Alumno.findOne({_id: req.params.id})
        console.log(alumno)

        if (alumno) {
            alumno.edad = req.body.edad
            alumno.nombre = req.body.nombre
            alumno.save()
        }
        
        res.send(alumno)
    } catch (e) {
        console.log(e)
        res.status(500).send(e.message)
    }
})

module.exports = router