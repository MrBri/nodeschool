'use strict';
var http = require('http');
var url = require('url');
var moment = require('moment');

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  var urlObj = url.parse(req.url, true);

  if (urlObj.pathname === '/api/parsetime') {
    var m = moment(urlObj.query.iso);

    res.write(JSON.stringify({ 'hour': m.hour(), 'minute': m.minute(), 'second': m.second() }));

  } else if (urlObj.pathname === '/api/unixtime') {
    res.write(JSON.stringify({ 'unixtime': moment(urlObj.query.iso).valueOf() }));
  } else {
    res.writeHead(404);
  }
  res.end();
});

server.listen(process.argv[2]);
