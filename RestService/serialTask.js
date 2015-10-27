'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var GPS = (function () {
    function GPS() {
        _classCallCheck(this, GPS);

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

    _createClass(GPS, [{
        key: 'isGpsConnected',
        value: function isGpsConnected() {
            return this.GpsConnected;
        }
    }, {
        key: 'updateCurrentPosition',

        //This function is called on the new data available on the serial port event.
        value: function updateCurrentPosition(data) {

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
    }, {
        key: '_onOpenGPS',
        value: function _onOpenGPS(error) {

            if (error) {
                console.log("failed to open serial port");
            } else {
                this.GpsConnected = true;
                console.log("open");

                this.serialPort.on('data', updateCurrentPosition);
            }
        }

        //Open the GPS serial port and register the on data event listener.
    }, {
        key: 'openGPS',
        value: function openGPS() {

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
    }, {
        key: 'readGPS',

        //Return a promise of the last updated reading.
        value: function readGPS() {
            this.deferred.resolve(currentPosition);
            return this.promise;
        }
    }]);

    return GPS;
})();

exports['default'] = GPS;
module.exports = exports['default'];