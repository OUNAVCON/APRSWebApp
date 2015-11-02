var request = require('request');

module.exports = {
  send: function(from, to, message, callback) {

    var url = 'http://www.findu.com/cgi-bin/sendmsg.cgi';
    var propertiesObject = { fromcall:from, tocall:to, msg: message };

    request({url:url, qs:propertiesObject}, function(err, response, body) {
      if(err) { console.log(err); return callback(err); }
      // return callback(null, body);
      return callback(null, 'APRS message sent.');
    });
  },

  receive: function(from, callback) {

    var url = 'http://api.aprs.fi/api/get';
    var propertiesObject = { what:'msg', dst:from, apikey: '27286.QJTmrxJGMvlNh', format:'json' };

    request({url:url, qs:propertiesObject}, function(err, response, body) {
      if(err) { console.log(err); return callback(err); }
      return callback(null, body);
    });
  }
};
