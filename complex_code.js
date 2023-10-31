/* 
Filename: complex_code.js
Description: A complex code demonstrating various concepts in JavaScript.
*/

// Utility function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to generate prime numbers within a given range
function generatePrimeNumbers(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Function to find the factorial of a number
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Object representing a car
const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  isElectric: true,
  startEngine() {
    return `Starting ${this.brand} ${this.model}...`;
  },
};

// Array of fruits
const fruits = ["apple", "banana", "orange", "kiwi", "mango"];

// Function to find the longest word in an array
function findLongestWord(words) {
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Object representing a playlist
const playlist = {
  name: "My Favorite Songs",
  songs: [
    { title: "Bohemian Rhapsody", artist: "Queen", duration: 355 },
    { title: "Hotel California", artist: "Eagles", duration: 390 },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", duration: 482 },
  ],
  getTotalDuration() {
    let totalDuration = 0;
    for (const song of this.songs) {
      totalDuration += song.duration;
    }
    return totalDuration;
  },
};

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage
console.log(isPrime(17));
console.log(generatePrimeNumbers(1, 20));
const person = new Person("John Doe", 25);
console.log(person.getInfo());
console.log(factorial(5));
console.log(car.startEngine());
console.log(findLongestWord(fruits));
console.log(playlist.getTotalDuration());
console.log(reverseString("Hello World!"));