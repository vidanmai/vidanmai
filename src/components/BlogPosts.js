// src/components/BlogPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./SanityClient";
import './style/blog.css';
import landingPic from './img/world-map-unsplash.jpg';

export default function BlogPosts() {
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

  return (
    <div>
      {/* Make img own component */}
      <img src={landingPic} alt="" id="blogLanding" />
      <div className="case blog">
        <h1 className="title">Latest Posts</h1>
        <div className="postGrid">
            {blogPostsData &&
              blogPostsData.map((post, index) => (
                <div className="postBox" key={post.slug.current}>
                  <Link to={"/blog/" + post.slug.current}>
                  <span key={index}>
                    <img src={post.mainImage.asset.url} alt="" />
                    <div className="postTitle">
                      <h2>{post.title}</h2>
                      <p>{new Date(post.publishedAt).toLocaleDateString('en-GB')}</p>
                    </div>
                  </span>
                </Link>
                </div>
              ))}
          </div>
      </div>
    </div>
  );
}