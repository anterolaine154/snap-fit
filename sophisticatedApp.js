/* filename: sophisticatedApp.js */

// Complex App: Calculating Fibonacci Series 

// Function to generate Fibonacci series up to "n" terms
const fibonacci = function(n) {
    let fibSeries = [];
    fibSeries[0] = 0;
    fibSeries[1] = 1;

    for(let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    return fibSeries;
}

// Function to check if a number is prime
const isPrime = function(num) {
    if (num <= 1) {
        return false;
    }

    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

// Function to find prime numbers in a given range
const findPrimeNumbers = function(start, end) {
    let primes = [];

    for(let i = start; i <= end; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

// Function to reverse a string
const reverseString = function(str) {
    return str.split('').reverse().join('');
}

// Function to convert a string to title case
const toTitleCase = function(str) {
    let words = str.split(' ');
    let titleCaseStr = '';

    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        titleCaseStr += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

        if(i !== words.length - 1) {
            titleCaseStr += ' ';
        }
    }

    return titleCaseStr;
}

// Example Usage

const fibonacciSeries = fibonacci(10);
console.log("Fibonacci Series:");
console.log(fibonacciSeries);

console.log("\nPrime Numbers between 1 and 100:");
const primeNumbers = findPrimeNumbers(1, 100);
console.log(primeNumbers);

console.log("\nReverse of 'Hello, World!':");
console.log(reverseString("Hello, World!"));

console.log("\nTitle Case of 'this is a tEST':");
console.log(toTitleCase("this is a tEST"));