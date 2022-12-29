const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://127.0.0.1:5173',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
        // Leave all rooms
        for (const room of Object.keys(socket.rooms)) {
            socket.leave(room);
        }
    });
});

server.listen(3000, () => {
    console.log('Server started - listening on port 3000...');
});