//  Creacion del Web Server

require('dotenv').config();

const Server = require('./models/server');


const server = new Server();

// Lanzar metodo listen()
server.listen();