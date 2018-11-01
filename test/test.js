const assert = require('assert');
const lib = require('./../lib');


describe('Primes', function() {
  describe('#primesGenerator()', function() {
    it('should generate first 10 primes', function() {
        const generator = lib.primesGenerator();
        
        // generate first 10 primes and compare it against predefined array
        let arr = [];
        for(let i = 0; i<10; i++){
            arr.push(generator.next().value);
        }

        assert.deepEqual(arr, [2,3,5,7,11,13,17,19,23, 29]);
    });
  });
});
