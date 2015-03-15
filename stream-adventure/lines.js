var split = require('split');
var through = require('through2');

var count = 0;

process.stdin.pipe(split()).pipe(through(function(buf, enc, next) {
  ++count;

  if (count % 2 === 0) {
    this.push(buf.toString().toUpperCase() + '\n');
  } else {
    this.push(buf.toString().toLowerCase() + '\n');
  }
  next();
})).pipe(process.stdout);

