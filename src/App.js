import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Nav from './components/nav/Nav';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ErrorPage from './components/ErrorPage';
import Academic from './components/Academic';
import BlogPosts from './components/BlogPosts';
import Post from './components/Post';
import Project from './components/Project';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/academic' exact component={Academic} />
          <Route path='/blog' exact component={BlogPosts} />
          <Route path='/blog/:slug' exact component={Post} />
          <Route path='/projects' exact component={Project} />
          <Route component={ErrorPage} />
        </Switch>
        <ScrollToTop/>
      </div>
    </Router>
  );
}

export default App;
