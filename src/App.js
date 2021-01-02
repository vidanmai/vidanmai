import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Nav from './components/nav/Nav';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
        <ScrollToTop/>
      </div>
    </Router>
  );
}

export default App;
