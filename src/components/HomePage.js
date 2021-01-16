import React from 'react';
import './style/home.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
        return (
            <div className="case" id="home">
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