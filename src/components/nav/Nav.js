import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar p-4">
          <ul className="flex space x-2">
            <Link to="/" id="logo">
              <li className="link" id="logoButton">Vi Dan Ba Mai</li>
            </Link>
            <Link to="/" id="about">
              <li className="link" id="aboutButton">About</li>
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