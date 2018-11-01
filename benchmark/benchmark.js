const Benchmark = require('benchmark');
const lib = require('../lib/index.js');

var suite = new Benchmark.Suite;
var n = 1;

function generateNPrimes(n){
    const generator = lib.primesGenerator(n);
    for(let i=0; i<n; i++){
        generator.next();
    }
}

for (var i = 1; i <= 5; i++) {
  n *= 10;
  suite.add(`Get first ${n} prime numbers.`, (function (n) {
	 return function () {
		generateNPrimes(n)
	 }
  })(n));
}

suite
	.on('cycle', function(event) {
	  console.log(String(event.target));
	}).on('complete', function() {
	  console.log('Done');
}).run();