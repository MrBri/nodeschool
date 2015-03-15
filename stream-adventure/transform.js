var through = require('through2');

var stream = through(write, end);

function write (buffer, encoding, next) {
  buffer = buffer.toString().toUpperCase();
  this.push(buffer);
  next();
}

function end () {
  this.push(null);
}
process.stdin.pipe(stream).pipe(process.stdout);
