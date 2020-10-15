//Importamos el módulo de eventos
var eventos = require('events');

var eventEmitter = new eventos.EventEmitter();

var conexionHandler = function conectado() {
    console.log('Conexion Exitosa');
    //busco datos
    //lanzo evento de datos recibidos
    eventEmitter.emit('datos_recibidos');
};

//Bind del evento conexion con el handler
//.on nos sirve para designar que metodo va asociado con que handler
// el encargado de manejar el evento conexion es el handler conexionHandler
eventEmitter.on('conexion', conexionHandler);

//Bindeamos el evento con una función anónima
eventEmitter.on('datos_recibidos', function () {
    console.log('Llegaron los datos');
    //proceso datos y los devuelvo
});

//fuerzo eventos
eventEmitter.emit('conexion');


//al modulo se le puede pasar cualquier cosa, clases, funciones, json, etc.
module.exports = { nombre: 'Pablo', apellido: 'Aran' };

