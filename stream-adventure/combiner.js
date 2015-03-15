'use strict';
var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');

module.exports = function () {
  var previous;
  return combine(
      split(),
      through(function(line, enc, cb) {
        if (line.length === 0) { return cb(); }
        var json = JSON.parse(line.toString());

        if (json && json.type === 'genre') {
          if (previous) {
            this.push(JSON.stringify(previous) + '\n');
          }
          previous = { name: json.name, books: [] };
        } else if (json && json.type === 'book') {
          previous.books.push(json.name);
        }
        cb();
      },
      function(cb) {
        if (previous) { this.push(JSON.stringify(previous) + '\n'); }
        cb();
      }),
      zlib.createGzip()
  );
};
