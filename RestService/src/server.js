'use strict';

var serialport = require('./serialTask.js');
var express = require('express');
var app = express();

var index = 0;

var port = 8090;

var router = new express.Router();

debugger;

var gps = new serialport();

//Register the paths and returns.
app.get('/', function (request, response) {
    response.send(JSON.stringify(index));
    index++;
});

app.get('/isgpsconnected', function (request, response) {
    response.send(JSON.stringify(gps.isGpsConnected()));
});

app.get('/currentPosition', function (request, response) {
    var data = gps.readGPS().then(function (data) {
        //console.log('server data: ' + JSON.stringify(data));
        return response.send(JSON.stringify(data));
    }).fail(function (error) {
        console.log('server error: ' + error);
        return response.send(JSON.stringify(error));
    });
});

//
app.use('/api', router);

//start the server listening
app.listen(port);
console.log('server listening.');
//start the serial port.
gps.openGPS();

console.log('Magic happens on port: ' + port);
