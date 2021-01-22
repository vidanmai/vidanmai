import React from 'react';
import './style/home.css';
import { Link } from 'react-router-dom';
import academicImg from './img/academic.jpeg';
import blogImg from './img/blog_travel.jpg';
import codingImg from './img/codingBackground.jpg';

export default function HomePage() {
    return (
        <div className="case" id="home">
            <div className="grid">
                <Link to="/academic" id="academic">
                    <div className="box" id="left">
                        <img src={academicImg} alt="" />
                        <h2>Academic</h2>
                    </div>
                </Link>
                <Link to="/blog" id="blog">
                    <div className="box" id="middle">
                        <img src={blogImg} alt=""/>
                        <h2>Blog</h2>
                    </div>
                </Link>
                <Link to="/projects" id="projects">
                    <div className="box" id="right">
                        <img src={codingImg} alt=""/>
                        <h2>Projects</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
}