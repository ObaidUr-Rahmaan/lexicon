const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mysql = require('mysql');
const dotenv = require('dotenv');

// Load the environment variables from the .env file
dotenv.config();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://127.0.0.1:5173',
        methods: ['GET', 'POST']
    }
});

// Create a connection to the MySQL database using the environment variables
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Connect to the MySQL database
connection.connect();

io.on('connection', (socket) => {
    console.log('a user connected');

    // Listen for the 'create room' event
    socket.on('create room', (roomName) => {
        console.log(`Creating room ${roomName}`);
        // Create a new room in the MySQL database
        connection.query(`INSERT INTO rooms (name, size) VALUES (?, 5)`, [roomName], (error, results) => {
            if (error) throw error;
            // Join the room
            socket.join(roomName);
            console.log(`${socket.id} joined room ${roomName}`);
        });
    });

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