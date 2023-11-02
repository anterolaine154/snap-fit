Filename: complexCode.js

/**
 *-----------------------------------------------------
 * Complex JavaScript Code
 *-----------------------------------------------------
 *
 * Description:
 * This code demonstrates a complex system for managing a bookstore.
 * It includes functionalities like adding books, searching, sorting, and providing recommendations.
 * The code is highly organized with modular functions and proper error handling.
 * It also utilizes modern JavaScript features like classes, arrow functions, and template literals.
 *-----------------------------------------------------
 */

class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }

  toString() {
    return `${this.title} by ${this.author}`;
  }
}

class Bookstore {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (book instanceof Book) {
      this.books.push(book);
      console.log(`Book ${book} has been added to the store.`);
    } else {
      throw new Error("Invalid book");
    }
  }

  searchBookByTitle(title) {
    const filteredBooks = this.books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
    return filteredBooks.length ? filteredBooks : "No matching books found.";
  }

  searchBookByAuthor(author) {
    const filteredBooks = this.books.filter((book) => book.author.toLowerCase().includes(author.toLowerCase()));
    return filteredBooks.length ? filteredBooks : "No matching books found.";
  }

  sortBooksByPrice() {
    return this.books.sort((a, b) => a.price - b.price);
  }

  sortBooksByQuantity() {
    return this.books.sort((a, b) => a.quantity - b.quantity);
  }

  getRecommendations() {
    return this.books.filter((book) => book.quantity > 0);
  }
}

// Create a new bookstore instance
const bookstore = new Bookstore();

// Test adding books
bookstore.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 12.99, 5));
bookstore.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 9.99, 8));
bookstore.addBook(new Book("1984", "George Orwell", 8.99, 3));
bookstore.addBook(new Book("Pride and Prejudice", "Jane Austen", 10.99, 2));

// Test searching and sorting books
console.log(bookstore.searchBookByTitle("_grea_")); // Partial search matching "_grea_"
console.log(bookstore.searchBookByAuthor("Scott")); // Partial search matching "Scott"
console.log(bookstore.sortBooksByPrice()); // Sorted by price in ascending order
console.log(bookstore.sortBooksByQuantity()); // Sorted by quantity in ascending order

// Get book recommendations
console.log(bookstore.getRecommendations()); // Books with quantity > 0

/**
 *-----------------------------------------------------
 * End of Complex JavaScript Code
 *-----------------------------------------------------
 */