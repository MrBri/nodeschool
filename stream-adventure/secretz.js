'use strict';
var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var concat = require('concat-stream');

var parser = tar.Parse();
var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);

parser.on('entry', function (file) {
  if (file.type !== 'File') { return; }

  var hash = crypto.createHash('md5', { encoding: 'hex' });
  file.pipe(hash).pipe(concat(function(h) {
    console.log(h + ' ' + file.path);
  }));
});

process.stdin.pipe(decipher).pipe(zlib.createGunzip()).pipe(parser);
