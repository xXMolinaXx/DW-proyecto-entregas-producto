var express = require('express'); // asi se importa el modulo de expres
var bodyParser = require('body-parser'); // asi se crea un json de los otros methos menos el get
var app = express(); //Objeto que se usa para estructura el be

//Middleware
//es una funcionalidades que se ejecutan entre la peticion y la repuesta
//app.use() se utiliza para ejecutar funciones middleware
//app.use(express.static('public')) asi se puede usar archivos html en node de la carpeta public
app.use(express.static('../frontend sin angular'));
app.use(bodyParser.json()); //esto sirve para poblar la informacion en un json de methodo get
app.use(bodyParser.urlencoded({ extended: true })); //esto es porque en post puede venir en url enconded asi tambien poblamos un json


app.post('/post', function(req, res) {
    //req.query.parametro asi se aceden a los parametros de la url
    //req.body viene la info que viene en post ,este es un json
    res.send(`<html><body><h1>Hola Mundo ${req.body.el}</h1></body></html>`); //asi se envia la respuesta
});
app.get('/', function(req, res) { // utiliza el metodo get y el primer parametos en la url ,en la funcion el primer parametro es el que se manda y el segundo es el que se envia 
    //req.query.parametro asi se aceden a los parametros de la url
    res.send('<html><body><h1>Hola Mundo</h1></body></html>'); //asi se envia la respuesta
});
app.get('/', function(req, res) { // utiliza el metodo get y el primer parametos en la url ,en la funcion el primer parametro es el que se manda y el segundo es el que se envia 
    //req.query.parametro asi se aceden a los parametros de la url
    res.send('<html><body><h1>Hola Mundo</h1></body></html>'); //asi se envia la respuesta
});
app.get('/ab*cd', function(req, res) { //abCUALQUIERCOSAcd rutas dinamicas en node
    res.send('<html><body><h1>Cumple con el patron ab*cd</h1></body></html>');
});

app.get('/capitulos/:numeroCapitulo', function(req, res) { //asi se obtiene parametos en la url
    res.send(`<html><body><h1>Ver capitulo ${req.params.numeroCapitulo}</h1></body></html>`);
});

app.listen(8888, function() { //essto levanta el servidor y lo mantiene escuchando
    console.log('Se levanto el servidor');
});