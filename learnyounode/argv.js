var total = process.argv.slice(2).reduce(function(prev, cur) {
  return +prev + +cur;
});

console.log(total);
