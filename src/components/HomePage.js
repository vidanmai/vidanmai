import React from 'react';
import './style/home.css';
import { Link } from 'react-router-dom';
import academicImg from './img/academic.jpeg';
import blogImg from './img/blog_travel.jpg';
import codingImg from './img/codingBackground.jpg';
import courseImg from './img/bookpage.jpg';
import BlogPosts from './BlogPosts';
import Academic from './Academic';
import developer from './img/developer.svg';

export default function HomePage() {
    return (
        <div className="case" id="home">
            <div className="homeGrid">
                <div id="landing">
                    <div className="hero">
                        <div className="intro">
                            <img src={developer} alt=""/>
                            {/*
                            <iframe src="https://open.spotify.com/follow/1/?uri=spotify:user:1117468525&size=detail&theme=light" width="300" height="56" scrolling="no" frameBorder="0" style={{border: 'none', overflow:'hidden', margin: '0.5rem auto'}} allowtransparency="true"></iframe>
                            <iframe id="spotifyPlayer" src="https://open.spotify.com/embed/playlist/66UzACdEbrcESDKlRCJ001" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                             */}
                        </div>
                    </div>
                </div>
                <div className="grid" id="right">
                    <Link to="/academic" id="academic">
                        <div className="box transition duration-200 ease-in-out transform hover:scale-105">
                            <img src={academicImg} alt="" />
                            <h2 className="boxTitle">Academic</h2>
                        </div>
                    </Link>
                    <Link to="/blog" id="blog">
                        <div className="box transition duration-200 ease-in-out transform hover:scale-105">
                            <img src={blogImg} alt="" />
                            <h2 className="boxTitle">Blog</h2>
                        </div>
                    </Link>
                    <Link to="/projects" id="projects">
                        <div className="box transition duration-200 ease-in-out transform hover:scale-105">
                            <img src={codingImg} alt="" />
                            <h2 className="boxTitle">Projects</h2>
                        </div>
                    </Link>
                    <Link to="/courses" id="courses">
                        <div className="box transition duration-200 ease-in-out transform hover:scale-105">
                            <img src={courseImg} alt="" />
                            <h2 className="boxTitle">Courses</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <BlogPosts/>
            <Academic/>
        </div>
    );
}