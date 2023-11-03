/* 
   Filename: complexApplication.js
   Content: A complex and elaborate JavaScript application demonstrating various aspects of modern web development.
*/

// Import necessary libraries and modules
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Create a class-based component
class ComplexApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Fetch data from API using axios
    axios.get('https://api.example.com/data')
      .then(response => {
        this.setState({
          data: response.data,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false,
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// Functional component for Home page
const Home = () => (
  <div>
    <h2>Welcome to the Home page!</h2>
    <p>This is the main page of our application. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
);

// Functional component for About page
const About = () => (
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus fermentum varius.</p>
  </div>
);

// Functional component for Contact page
const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Please fill out the form and we will get back to you as soon as possible.</p>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required /><br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required /><br />
      <textarea name="message" rows="4" cols="30" placeholder="Enter your message"></textarea><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

// Render the application to the DOM
ReactDOM.render(<ComplexApplication />, document.getElementById('root'));