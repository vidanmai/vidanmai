// src/components/BlogPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./SanityClient";
import './style/blog.css';

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
    <div className="case">
      <h1 className="title">Latest Posts</h1>
      <div className="grid">
        {blogPostsData &&
          blogPostsData.map((post, index) => (
            <Link to={"/blog/" + post.slug.current} key={post.slug.current} className="postBox">
              <span key={index}>
                <img src={post.mainImage.asset.url} alt="" />
                <div className="postTitle">
                  <h2>{post.title}</h2>
                  <p>{new Date(post.publishedAt).toLocaleDateString('en-GB')}</p>
                </div>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}