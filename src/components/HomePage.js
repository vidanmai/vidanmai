import React, { useState, useEffect } from "react";
import sanityClient from "./SanityClient";
import "./style/home.css";
import { Link } from "react-router-dom";
import academicImg from "./img/academic.jpeg";
import blogImg from "./img/blog_travel.jpg";
import codingImg from "./img/codingBackground.jpg";
import Academic from "./Academic";
import developer from "./img/developer.svg";

export default function HomePage() {
  const [blogPostsData, setBlogPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        publishedAt,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setBlogPosts(data))
      .catch(console.error);
  }, []);

  //Sort blog posts
  blogPostsData &&
    blogPostsData.sort(function (a, b) {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    });
  let blogPosts = null;
  if (blogPostsData) {
    blogPosts = blogPostsData.slice(0, 3);
  }
  return (
    <div className="container case" id="home">
      <div className="homeGrid">
        <div id="landing">
          <div className="hero">
            <div id="intro">
              <img src={developer} alt="" />
            </div>
          </div>
        </div>
        <div className="grid" id="right">
          <Link to="/academic" id="academic">
            <div className="transition duration-200 ease-in-out transform box hover:scale-105">
              <img src={academicImg} alt="" />
              <h2 className="boxTitle">Academic</h2>
            </div>
          </Link>
          <Link to="/blog" id="blog">
            <div className="transition duration-200 ease-in-out transform box hover:scale-105">
              <img src={blogImg} alt="" />
              <h2 className="boxTitle">Blog</h2>
            </div>
          </Link>
          <Link to="/projects" id="projects">
            <div className="transition duration-200 ease-in-out transform box hover:scale-105">
              <img src={codingImg} alt="" />
              <h2 className="boxTitle">Projects</h2>
            </div>
          </Link>
        </div>
      </div>
      <hr />
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#F3F4F6" fillOpacity="1" d="M0,64L48,90.7C96,117,192,171,288,192C384,213,480,203,576,181.3C672,160,768,128,864,117.3C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <section className="grey-bg">
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#F3F4F6" fillOpacity="1" d="M0,96L80,106.7C160,117,320,139,480,122.7C640,107,800,53,960,53.3C1120,53,1280,107,1360,133.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
      <hr />
      {/* Set a limit on displaying 3 blog posts on homepage */}

      <div className="container py-10 case blog">
        <h1 className="text-3xl font-bold text-center uppercase">
          Latest Posts
        </h1>
        <div className="py-10 postGrid">
          {blogPostsData &&
            blogPosts &&
            blogPosts.map((post, index) => (
              <div className="postBox" key={post.slug.current}>
                <Link to={"/blog/" + post.slug.current}>
                  <span key={index}>
                    <img src={post.mainImage.asset.url} alt="" />
                    <div className="p-2 postTitle">
                      <h2 className="font-bold">{post.title}</h2>
                      <p className="text-xs postDate">
                        {new Date(post.publishedAt).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                  </span>
                </Link>
              </div>
            ))}
        </div>
      </div>

      <hr />
      <Academic />
    </div>
  );
}
