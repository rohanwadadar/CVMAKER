// Inside App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import DestinationPage from './DestinationPage';

import './Global.css'; // Import the Global styles

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/src/about" component={About} />
          <Route path="/src/portfolio" component={Portfolio} />
          <Route path="/src/destination" component={DestinationPage} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
