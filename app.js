const express = require('express')
const alumno = require('./src/routes/alumno')
require('./config/db')

// instanciar la app principal
const app = express()

app.use(express.json())
app.use(alumno)

app.get('/rulo', (req,res) => {
    const hola = '<h1>hola mundo jediondo</h1>'
    res.send(hola)
})

app.get('/choches', (req, res) => {
    const lora = Date()
    res.send(`Ahorita son las ${lora} `)
})

app.post('/rulo', (req, res) => {
    // console.log(req)
    const nombre = req.body.nombre
    res.send({'resultado': nombre})
})

app.delete('/rulo', (req, res) => {
    const nombre = req.body.nombre
    if (nombre === 'isaac') {
        res.send({'borrar':req.body.nombre})
    } else {
        res.status(500).send()
    }
})

module.exports = app

