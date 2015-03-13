'use strict';
var http = require('http');

var data1 = '';
var data2 = '';
var data3 = '';

// refactor to loop (this way more performant?), avoided using external libs
http.get(process.argv[2], function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) { data1 += chunk; });
  res.on('end', function() {
    console.log(data1);
    http.get(process.argv[3], function(res2) {
      res2.setEncoding('utf8');
      res2.on('data', function(chunk2) { data2 += chunk2; });
      res2.on('end', function() {
        console.log(data2);
        http.get(process.argv[4], function(res3) {
          res3.setEncoding('utf8');
          res3.on('data', function(chunk3) { data3 += chunk3; });
          res3.on('end', function() {
            console.log(data3);
          });
        });
      });
    });
  });
});
