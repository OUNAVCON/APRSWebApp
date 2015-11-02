'use strict';


export default class GPS {
    constructor() {

        this.nmea = require('nmea-0183');
        this.Q = require('q');
        this.serialport = require("serialport");
        this.SerialPort = this.serialport.SerialPort;

        this.serialPort = new this.SerialPort("/dev/ttyUSB0", {
            baudrate: 4800,
            parser: this.serialport.parsers.readline("\n")
        }, false);
        this.currentPosition = {};
        this.deferred = this.Q.defer();
        this.GpsConnected = false;
        this.GpsDataValid = false;
    }

    isGpsConnected() {
        return this.GpsConnected;
    }


    //This function is called on the new data available on the serial port event.
    updateCurrentPosition(data) {

        try {
            var GPSData = this.nmea.parse(data);
            if (GPSData.valid == 'V') {
                this.currentPosition = GPSData;
                this.GpsDataValid = true;
            }
        } catch (e) {
            console.log('read serial port nmea parse error ' + e);
            console.log(data);
            this.GpsDataValid = false;
        }
    }

    _onOpenGPS(error) {

        if (error) {
            console.log("failed to open serial port");
        } else {
            this.GpsConnected = true;
            console.log("open");

            this.serialPort.on('data', updateCurrentPosition);
        }
    }

    //Open the GPS serial port and register the on data event listener.

    openGPS() {

        try {
            this.serialPort.close();
        } catch (e) {
            console.log(e);
        }
        try {
            this.serialPort.open(_onOpenGPS);
        } catch (e) {
            console.log('serial port open error ' + e);
        }
    }

    //Return a promise of the last updated reading.
    readGPS() {
        this.deferred.resolve(currentPosition);
        return this.promise;
    }


}
