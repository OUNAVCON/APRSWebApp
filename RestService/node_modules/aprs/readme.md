Send and Receive APRS Messages
---

```
var aprs = require('aprs');

aprs.send(fromCallsign, toCallsign, message, function(err, data){
  if (err) {
    console.error(err);
    return
  }
  console.log(data);
});

aprs.receive(toCallsign, function(err, data){
  if (err) {
    console.error(err);
    return
  }
  console.log(data);
});

```

API Notes
---

Send APRS
```
http://www.findu.com/cgi-bin/sendmsg.cgi?fromcall=N7ICE&tocall=73S&msg=testing123
```

Check APRS:
```
http://api.aprs.fi/api/get?what=msg&dst=73S&apikey=27286.QJTmrxJGMvlNh&format=json
```
