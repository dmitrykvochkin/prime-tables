'use strict';

/**
 * Check if  value exists in not prime list; if doesn't exist it is a prime
 * @param {Map} map 
 * @param {Number} valueToCheck 
 * @returns {boolean} isPrime
 */
function isPrime(map, valueToCheck){
    return !(map.has(valueToCheck));
}


/**
 * Create a javascript generator that return next prime number upon "next()" invocation
 */
function* primesGenerator() {
    const notPrimeMap = new Map();
    let valueToCheck = 2;
    while(true) {
        if (isPrime(notPrimeMap, valueToCheck)) {
            yield valueToCheck;
            // mark next non prime number
            notPrimeMap.set(valueToCheck**2, [valueToCheck]);
        } else {
            let primes = notPrimeMap.get(valueToCheck);
            // generate next multiple of primes to be added to non prime table
            primes.forEach(prime=> {
                let nextMultipleOfPrime = prime + valueToCheck;
                if (notPrimeMap.has(nextMultipleOfPrime)) {
                    notPrimeMap.get(nextMultipleOfPrime).push(prime);
                } else {
                    notPrimeMap.set(nextMultipleOfPrime, [prime]);
                }
            });

            // delete previous numbers to keep memory usage lean
            notPrimeMap.delete(valueToCheck);
        }
        valueToCheck += 1;
    }
}


/**
 * Generate n primes and their respective multiplication table
 * @param {Number} n 
 */
function generateMatrix(n) {
    let matrix = [['']];
    const primesGenerator = this.primesGenerator();

    for(let i=0; i<n; i++){
        // generate prime
        let prime = primesGenerator.next().value;

        // add to matrix
        matrix[0].push(prime);
        
        // add multiplication result to each row as new column
        for(let r = 1; r < matrix.length; r++){
            matrix[r].push( prime*matrix[r][0] );
        }

        // add new row
        let firstRow = matrix[0];
        let newRow = new Array(firstRow.length)
        newRow[0] = prime;
        for(let c = 1; c<firstRow.length; c++){
            newRow[c] = prime*firstRow[c];
        }
        matrix.push(newRow);
    }

    return matrix;
}

module.exports = {
    primesGenerator,
    generateMatrix,
};