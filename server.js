const express = require('express')

// https://expressjs.com/en/4x/api.html 
const app = express()
app.use(express.static("public"))

// https://nodejs.org/api/http.html
const http = require('http').Server(app)

// https://socket.io
const serverSocket = require('socket.io')(http)

const porta = process.env.porta || 8080

const host = "http://localhost"

http.listen(porta, () => {
    const portaStr = porta === 80 ? '' :  ':' + porta
    if (process.env.HEROKU_APP_NAME)
        console.log('Servidor iniciado. Abra o navegador em ' + host)
    else console.log('Servidor iniciado. Abra o navegador em ' + host + portaStr)
})

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

