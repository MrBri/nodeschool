'use strict';
var fs = require('fs');
var path = require('path');

module.exports = function(dirName, ext, cb) {

  fs.readdir(dirName, function(err, list) {
    if (err) { return cb(err); }

    var filteredList = list.filter(function(file) {
      return path.extname(file).indexOf('.' + ext) !== -1;
    });

    cb(null, filteredList);
  });
};