var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
  list.forEach(function(file) {
    if (path.extname(file).indexOf(process.argv[3]) !== -1) {
      console.log(file);
    }
  });
});
