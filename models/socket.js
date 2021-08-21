
class Socket {

    constructor(io){
        this.io = io;
        this.socketEvent();
    }

    socketEvent(){

        this.io.on('connection', (socket) => { 
        
            // Se emite un evento para enviar al cliente y se envia la data
            // socket.emit('Mensaje_bienvenida',{
            //     msg: 'Bienvenido al servidor',
            //     id: '12345'
            // });
        
            socket.on('message-to-server', (data) => {
                console.log(data);
        
                //con el socket emit se responde solo al cliente o dispositivo conectado
                //socket.emit('respuesta-to-client',data);
        
                // con el socket io se responde a todos los clientes o dispositivos
                this.io.emit('respuesta-to-client',data);
            });
        
            // Se escucha un evento por parte del cliente y se recibe la data
            // socket.on('mensaje-cliente', (data) => {
            //     console.log(data);
            // });
         })
    }
    
//conexion

}

module.exports = Socket