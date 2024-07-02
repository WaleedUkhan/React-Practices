// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2>Welcome to the Home Page</h2>
    <p>This is the home page of our React Router example application. Explore the links to navigate.</p>
    <img src="https://via.placeholder.com/300" alt="Placeholder" style={{ marginTop: '20px' }} />
    <div style={{ marginTop: '20px' }}>
      <button style={{ margin: '10px', padding: '10px 20px' }}>Learn More</button>
      <button style={{ margin: '10px', padding: '10px 20px' }}>Get Started</button>
    </div>
  </div>
);

const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
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

export default App;
