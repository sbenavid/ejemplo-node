const express = require('express')

// instanciar la app principal
const app = express()

app.use(express.json())

app.get('/rulo', (req,res) => {
    const hola = '<h1>hola mundo jediondo</h1>'
    res.send(hola)
})

app.get('/choches', (req, res) => {
    const lora = Date()
    res.send(`Ahorita son las ${lora} `)
})

module.exports = app

