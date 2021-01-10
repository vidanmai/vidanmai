import React from 'react';
import './style/home.css';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div className="case" id="home">
                <h1>VIDAN BA MAI</h1>
                <div className="grid">
                    <Link to="/academic" id="academic">
                        <div className="box" id="left">
                            <h2>Academic</h2>
                        </div>
                    </Link>
                    <Link to="/blog" id="blog">
                        <div className="box" id="middle">
                            <h2>Blog</h2>
                        </div>
                    </Link>
                    <Link to="/projects" id="projects">
                        <div className="box" id="right">
                            <h2>Projects</h2>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomePage;