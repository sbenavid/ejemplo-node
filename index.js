const app = require('./app')

const port = 3001

// iniciar servicio
app.listen(port, () => {
    console.log('Vamos a correr en el puerto: ' + port)
})
