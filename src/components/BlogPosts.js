// src/components/BlogPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./SanityClient";
import './style/blog.css';
import landingPic from './img/world-map-unsplash.jpg';

export default function BlogPosts(props) {
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
  blogPostsData && blogPostsData.sort(function (a, b) {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  })
  return (
    <div>
      {/* Make img own component */}
      <img src={landingPic} alt="" id="blogLanding" />
      <div className="case blog py-5">
        <h1 className="text-center font-bold text-3xl uppercase">Latest Posts</h1>
        <div className="postGrid py-10">
          {blogPostsData &&
            blogPostsData.map((post, index) => (
              <div className="postBox" key={post.slug.current}>
                <Link to={"/blog/" + post.slug.current}>
                  <span key={index}>
                    <img src={post.mainImage.asset.url} alt="" />
                    <div className="postTitle p-2">
                      <h2 className="font-bold">{post.title}</h2>
                      <p className="text-xs">{new Date(post.publishedAt).toLocaleDateString('en-GB')}</p>
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