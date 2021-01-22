import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';
//import facebookBlack from '../icons/facebook_black.svg';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar flex justify-between">
          <div id="logo">
            <Link to="/">
              <li className="logo" id="logoButton">Vi Dan Ba Mai</li>
            </Link>
          </div>
          <ul className="flex flex-row">
            {/*
            <li className="link">
              <a href="#https://www.facebook.com/vidan97/">
                <img src={facebookBlack} alt="facebook icon" id="facebookIcon"/>
              </a>
            </li>
             */}
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