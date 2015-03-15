var duplex = require('duplexer2');
var through = require('through2').obj;

var obj = {};

module.exports = function(counter) {

  var input = through(write, end);

  function write (chunk, enc, cb) {
    obj[chunk.country] = (obj[chunk.country] || 0) + 1;
    cb();
  }

  function end (cb) {
    counter.setCounts(obj);
    cb();
  }
  return duplex(input, counter);
};