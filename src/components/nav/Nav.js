import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div>
            <Link to="/">
              <li className="logo" id="logoButton">👨‍💻 Vi Dan Ba Mai</li>
            </Link>
          </div>
          <div className="space"></div>
          <ul className="link-row">
            <Link to="/academic" id="academic">
              <li className="link">Academic</li>
            </Link>
            <Link to="/blog" id="blog">
              <li className="link">Blog</li>
            </Link>
            <Link to="/projects" id="projects">
              <li className="link">Projects</li>
            </Link>
            <Link to="/courses" id="courses">
              <li className="link">Courses</li>
            </Link>
            <Link to="/contact" id="contact">
              <li className="link" id="contactButton">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;