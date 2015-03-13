var fs = require('fs');

fs.readFile(process.argv[2], { encoding: 'utf8' }, function(err, str) {
  if (err) { throw err; }
  console.log(str.split('\n').length - 1);
});
