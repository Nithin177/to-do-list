import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Joke from './components/Joke';
import Category from './components/Category';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/joke">Random Joke</Link>
            </li>
            <li>
              <Link to="/category">Joke Categories</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/joke" component={Joke} />
          <Route path="/category" component={Category} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
