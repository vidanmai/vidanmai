import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <h1>NAV</h1>
                <div className="links">
                    <ul className="listLinks">
                        <Link to='/'>
                            <li className="link">Hjem</li>
                        </Link>
                        <Link to='/contact'>
                            <li className="link">Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;