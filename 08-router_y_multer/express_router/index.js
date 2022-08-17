const express = require('express');
const routerMascotas = require('./routes/mascotas.js');
const routerPersonas = require('./routes/personas.js');

const app = express();

const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));
app.use(express.json());

app.use('/api', routerMascotas);
app.use('/api', routerPersonas);