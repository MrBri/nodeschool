var through = require('through');
var trumpet = require('trumpet');
var tr = trumpet();

process.stdin.pipe(tr);

var loud = tr.createStream('.loud');
loud.pipe(through(function(buf) {
  this.queue(buf.toString().toUpperCase());
})).pipe(loud);

tr.pipe(process.stdout);