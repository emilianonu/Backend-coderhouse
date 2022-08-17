const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/datos', (req, res) => {
    const { min, nivel, max, titulo } = req.query;
    res.render('index', { min, nivel, max, titulo });
})

const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server runnin on port ${PORT}`));
server.on('error', err => console.log(err));