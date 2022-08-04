const http = require('http');


const server = http.createServer((req, res) => {
    const time = new Date().getHours();
    if (time >= 6 && time <= 12) {
        res.end('<h1>Buenos días!</h1>');
    } else if (time >= 13 && time <= 19) {
        res.end('<h1>Buenas tardes!</h1>');
    } else {
        res.end('<h1>Buenas noches!</h1>');
    }
})


const connectedServer = server.listen(8080, () => {
    console.log(`Server http escuchando en el puerto ${connectedServer.address().port}`)
});