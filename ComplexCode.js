/*
Filename: ComplexCode.js
Content: A complex code demonstrating a social media platform with various features like user authentication, posts creation, likes, comments, and search functionality.
*/

// User class representing a user in the social media platform
class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.posts = [];
    this.friends = [];
  }

  createPost(content) {
    const post = new Post(this.username, content);
    this.posts.push(post);
    return post;
  }

  addFriend(user) {
    this.friends.push(user);
    user.friends.push(this);
  }
}

// Post class representing a post in the social media platform
class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  addLike() {
    this.likes++;
  }

  addComment(user, content) {
    const comment = new Comment(user, content);
    this.comments.push(comment);
    return comment;
  }
}

// Comment class representing a comment on a post
class Comment {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.likes = 0;
  }

  addLike() {
    this.likes++;
  }
}

// UserRepository class representing a collection of users
class UserRepository {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  findUserByUsername(username) {
    return this.users.find(user => user.username === username);
  }

  findUserByEmail(email) {
    return this.users.find(user => user.email === email);
  }
}

// Initialize the social media platform
const userRepository = new UserRepository();

// Create a user
const user1 = new User("user1", "password1", "user1@example.com");
userRepository.addUser(user1);

// Create another user
const user2 = new User("user2", "password2", "user2@example.com");
userRepository.addUser(user2);

// Add user1 and user2 as friends
user1.addFriend(user2);

// Create a post by user1
const post1 = user1.createPost("Hello world!");

// Like the post1
post1.addLike();

// Add a comment to post1
const comment1 = post1.addComment(user2, "Nice post!");

// Like the comment1
comment1.addLike();

// Search for users by username or email
const foundUser1 = userRepository.findUserByUsername("user1");
console.log("Found User 1:", foundUser1);

const foundUser2 = userRepository.findUserByEmail("user2@example.com");
console.log("Found User 2:", foundUser2);

// ...rest of the code for more features and functionalities

// Execution Order of Complexity: 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + ... (continued)