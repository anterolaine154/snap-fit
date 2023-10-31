/* 
Filename: professional_complex_code.js 
Content: This code is a complex implementation of a web-based task management system 
*/

// Define Task class
class Task {
  constructor(id, title, description, status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }

  // Update task status
  updateStatus(newStatus) {
    this.status = newStatus;
  }
}

// Define Board class
class Board {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  // Add task to the board
  addTask(task) {
    this.tasks.push(task);
  }

  // Remove task from the board
  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  // Get a task by its ID
  getTaskById(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }
}

// Define User class
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.boards = [];
  }

  // Add board for the user
  addBoard(board) {
    this.boards.push(board);
  }
}

// Create users
const user1 = new User(1, "John Doe", "john@example.com");
const user2 = new User(2, "Jane Smith", "jane@example.com");

// Create boards
const board1 = new Board("Project ABC");
const board2 = new Board("Project XYZ");

// Assign boards to users
user1.addBoard(board1);
user2.addBoard(board2);

// Create tasks
const task1 = new Task(1, "Task 1", "Description for Task 1", "In Progress");
const task2 = new Task(2, "Task 2", "Description for Task 2", "To Do");
const task3 = new Task(3, "Task 3", "Description for Task 3", "Done");

// Add tasks to the boards
board1.addTask(task1);
board1.addTask(task2);
board2.addTask(task3);

// Update task status
task1.updateStatus("Completed");

// Remove a task from the board
board2.removeTask(3);

// Get a task by ID
const retrievedTask = board1.getTaskById(2);

console.log(user1);
console.log(user2);
console.log(board1);
console.log(board2);
console.log(retrievedTask);