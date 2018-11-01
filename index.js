'use strict';
const argv = require('minimist')(process.argv.slice(2));
const lib = require('./lib');

if(
    argv['help']
    || (!argv['n']) 
){  
    console.log('\n###### Please use: ######');
    console.log('node index.js --n=N');
    process.exit(0);
    return;
}

const n = argv['n'];

console.log(`Calling primes table with n=${n}`);

const matrix = lib.generateMatrix(n);
console.log(matrix);
