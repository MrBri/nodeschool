var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(res) {
  res.pipe(bl(function(err, buf) {
    if (err) { console.error(err); }

    console.log(buf.toString().length);
    console.log(buf.toString());
  }));
});

