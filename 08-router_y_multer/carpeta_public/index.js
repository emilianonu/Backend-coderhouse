const express = require('express');
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server listening `));
server.on("error", err => console.log(`Error: ${err}`));
const routerMascotas = require('./routes/mascotas.js');
const routerPersonas = require('./routes/personas.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});