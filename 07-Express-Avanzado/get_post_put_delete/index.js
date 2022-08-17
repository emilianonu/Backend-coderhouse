const express = require('express');

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let frase = 'Frase inicial';

app.get('/api/frase', (req, res) => res.send({ frase }));

app.get('/api/palabras/:pos', (req, res) => {
    const pos = parseInt(req.params.pos);
    let palabras = frase.split(' ');
    res.send({ buscada: palabras[pos - 1] });
})

app.post('/api/palabras', (req, res) => {
    let { palabra } = req.body;
    frase = frase.concat(' ', palabra);
    let palabras = frase.split(' ');
    res.send({
        agregada: palabra,
        pos: palabras.length
    });
});

app.put('/api/palabras/:pos', (req, res) => {
    let { palabra } = req.body;
    let pos = parseInt(req.params.pos) - 1;
    frase = frase.split(' ');
    let anterior = frase[pos];
    frase[pos] = palabra;
    res.send({
        actualizada: frase[pos],
        anterior
    })
})

app.delete('/api/palabras/:pos', (req, res) => {
    let pos = parseInt(req.params.pos) - 1;
    frase = frase.split(' ');
    frase = frase.filter((e, ix) => ix != pos);
});

app.listen(8080);