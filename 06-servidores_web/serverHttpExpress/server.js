const express = require('express');

const app = express();

app.get('/mundo', (req, res) => {
    res.send({ mensaje: 'hola mundo'});
})

const server = app.listen(8080, () => {
    console.log(`Servidor http, escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`));

app.get('/', (req, res) => res.send('<h1 style="color: blue">Bienvenidos al servidor express</h1>'));

let visitas = 0;
app.get('/visitas', (req, res) => res.send(`La cantidad de visitas es ${visitas++}`));

let fyh = new Date().toLocaleString();
app.get('/fyh', (req, res) => res.send({ fyh }));

app.get('*', (req, res) => res.send('Opción no válida!'));