import React from 'react';
import './style/home.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className="case" id="home">
                <h1>VIDAN BA MAI</h1>
                <div className="grid">
                    <div id="left">
                        <h2>Portfolio</h2>
                    </div>
                    <div id="right">
                        <h2>Projects</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;