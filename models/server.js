// Servidores de express
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const Socket = require('./socket');


class Server {

    constructor(){

        
        this.app = express();
        this.port = process.env.PORT;

        //Http server
        this.server = http.createServer(this.app);
        
        //configuracion de sockets server
        this.io = socketIo(this.server, {/* configuracion */});

    }

    middlewares(){
        //Creando el directorio para la conexion
        this.app.use(express.static(path.resolve(__dirname, '../public') ));
    }

    configuracionesSockets(){
        new Socket(this.io);
    }

    execute(){

        this.configuracionesSockets();

        // Inicizalizar el Middleware
        this.middlewares();

        // Inicializar el server
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto: ', this.port);
            });
       
    }
}

module.exports = Server;