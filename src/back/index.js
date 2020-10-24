/*=============================================================================
 * Authors: Agustin Bassi, Brian Ducca, Santiago Germino 
 * Date: Jul 2020
 * Licence: GPLV3+
 * Project: DAW - CEIoT - Project Structure
 * Brief: Main backend file - aca usamos express
=============================================================================*/

//=======[ Settings, Imports & Data ]==========================================

var PORT = 3000;

var express = require('express');
var app = express();
var mysql = require('./mysql-connector');

// to parse application/json
app.use(express.json());
// to serve static files
app.use(express.static('/home/node/app/static/'));

//=======[ Main module code ]==================================================

app.get('/devices/:id', function (req, res, next) {
    let id = req.params.id;
    console.log(id);

    response = "{ 'key1':'value1' }";
    res.send(JSON.stringify(response)).status(200);
});

app.listen(PORT, function (req, res) {
    console.log("NodeJS API running correctly");
});

let persona = require('./datos.js');
console.log(persona.nombre + ' ' + persona.apellido);



// punto 3 Crear una variable en la API y asignarle todo el json del archivo “datos.json”
// let datosJson = require('./datos.json');
// console.log(datosJson);

//p4 Crear un método GET que devuelve un JSON con todo el listado de dispositivos
app.get('/dispositivos/', function (req, res, next) {
    // res.send(JSON.stringify(datosJson)).status(200);//tmb sirve
    // res.json(datosJson);

    mysql.query('SELECT * FROM devices ', function (err, respuesta) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(respuesta);
    });
});



//5)Crear un método GET que reciba por parámetro un id y devuelva un JSON con el
//dispositivo que tenga ese id
app.get('/dispositivos/:id', function (req, res, next) {
    // let dato = datosJson.filter((i)=>{
    //     return i.id==req.params.id;
    // });

    // let dato = datosJson.filter(i => i.id == req.params.id);

    // res.json(dato);

    mysql.query('SELECT * FROM devices where id=?', [req.params.id], function (err, respuesta) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(respuesta);
    });
});

// 6)
app.post('/dispositivos/', function (req, res, next) {
    // let dato = datosJson.filter(i => i.id == req.body.id);
    // if (dato.length > 0) {
    //     dato[0].state = req.body.state;
    // }
    // res.json(dato);

    mysql.query('UPDATE devices set state=? where id=?', [req.body.state, req.body.id], function (err, respuesta) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send('update ok');
    });

});

app.post('/dispositivos/agregar/', function (req, res, next) {
    mysql.query('INSERT INTO devices (name,description,state,type) VALUES (?,?,?,?)', [req.body.nombre, req.body.descripcion, 0, req.body.tipo], function (err, respuesta) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send('Insert ok');
    });

});

app.post('/dispositivos/eliminar/', function (req, res, next) {
    console.log(req.body);
    mysql.query('DELETE FROM devices WHERE id=?', [req.body.id], function (err, respuesta) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send('Delete ok');
    });

});

//=======[ End of file ]=======================================================
