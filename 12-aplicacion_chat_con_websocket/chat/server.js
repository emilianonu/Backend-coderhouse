const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const PORT = 8080;
const app = express();
app.use(express.static('public'));
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const messages = [
	{ author: 'Juan', text: '¡Hola! ¿Qué tal?' },
	{ author: 'Pedro', text: 'Muy bien! ¿Y vos?' },
	{ author: 'Ana', text: 'Genial!' }
]

io.on('connection', socket => {
	console.log('Un cliente se ha conectado');
	io.sockets.emit('messages', messages);
	//este evento carga el historial de mensajes cuando un nuevo cliente se conecta
	socket.emit('messages', messages);
	socket.on('new-message', data => {
		messages.push(data);
		//Este evento envia un nuevo mensaje a todos los clientes que este conectado en ese momento
		io.sockets.emit('messages', messages);
	})
});

httpServer.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});