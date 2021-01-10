import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';

class Nav extends React.Component {
    render() {
        return (
          <div>
            <nav className="navbar">
              <ul className="listLinks">
                <Link to="/" id="about">
                  <li className="link" id="aboutButton">About</li>
                </Link>
                <Link to="/contact" id="contact">
                  <li className="link" id="contactButton">Contact</li>
                </Link>
              </ul>
            </nav>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        );
    }
}

export default Nav;