/* 
   JavaScript Code for Complex Data Manipulation 
   Filename: complex_data.js 
*/

// Create a dataset of books
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { id: 5, title: "Moby Dick", author: "Herman Melville", year: 1851 },
  { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { id: 7, title: "To the Lighthouse", author: "Virginia Woolf", year: 1927 },
  { id: 8, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 }
];

// Create an object to store book statistics
let bookStats = {
  totalBooks: books.length,
  authors: [],
  years: []
};

// Retrieve all unique authors and years from the book dataset
for (let book of books) {
  if (!bookStats.authors.includes(book.author)) {
    bookStats.authors.push(book.author);
  }

  if (!bookStats.years.includes(book.year)) {
    bookStats.years.push(book.year);
  }
}

// Sort the authors alphabetically
bookStats.authors.sort();

// Sort the years in ascending order
bookStats.years.sort((a, b) => a - b);

// Display the statistics
console.log("Total Books: " + bookStats.totalBooks);
console.log("Unique Authors: " + bookStats.authors.join(", "));
console.log("Published Years: " + bookStats.years.join(", "));

// Find the book with the oldest publication year
let oldestBook = books.reduce((prev, current) => {
  return prev.year < current.year ? prev : current;
});

console.log("Oldest Book: " + oldestBook.title + " (" + oldestBook.year + ")");

// Calculate average publication year of books
let totalYears = bookStats.years.reduce((accumulator, current) => {
  return accumulator + current;
});

let averageYear = totalYears / bookStats.years.length;
console.log("Average Publication Year: " + averageYear);

// Filter books published after 1950 and authored by women
let filteredBooks = books.filter(book => {
  return book.year > 1950 && book.author.includes(" Woolf");
});

console.log("Filtered Books:");
for (let book of filteredBooks) {
  console.log(book.title + " (" + book.year + ")");
}

// Perform an operation on each book's ID
let modifiedBooks = books.map(book => {
  book.id += 1000;
  return book;
});

console.log("Modified Books:");
for (let book of modifiedBooks) {
  console.log(book.id + " - " + book.title);
}

// Search for a book by title
let searchTitle = "Moby Dick";
let searchedBook = books.find(book => {
  return book.title === searchTitle;
});

if (searchedBook) {
  console.log("Searched Book Found: " + searchedBook.title);
} else {
  console.log("Searched Book Not Found");
}

// Perform a complex operation on each book's title
let processedTitles = books.map(book => {
  let processedTitle = "";

  for (let i = 0; i < book.title.length; i++) {
    processedTitle += String.fromCharCode(book.title.charCodeAt(i) + 1);
  }

  return processedTitle;
});

console.log("Processed Titles:");
for (let title of processedTitles) {
  console.log(title);
}

// Remove a book from the dataset by ID
let deleteID = 3;
let indexOfBook = books.findIndex(book => {
  return book.id === deleteID;
});

if (indexOfBook !== -1) {
  books.splice(indexOfBook, 1);
  console.log("Book with ID " + deleteID + " successfully deleted");
} else {
  console.log("Book with ID " + deleteID + " not found");
}

// Perform additional complex operations on the books dataset...

// ...

// End of code