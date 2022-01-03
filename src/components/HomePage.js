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
    <div className="case" id="home">

      <div className="homeGrid container">
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

      <div className="py-5 case blog" id="blogPosts">
        <h1 className="py-2 text-3xl font-bold text-center uppercase bg-cyan-300">
          Latest Posts
        </h1>
        <div className="py-10 postGrid container">
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
