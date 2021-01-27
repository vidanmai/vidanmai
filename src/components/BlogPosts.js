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
  //Sort blog posts
  blogPostsData && blogPostsData.sort(function(a, b) {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  })
  return (
    <div>
      {/* Make img own component */}
      <img src={landingPic} alt="" id="blogLanding" />
      <div className="case blog">
        <h1 className="title">Latest Posts</h1>
        <div className="postGrid">
            {blogPostsData &&
              blogPostsData.map((post, index) => (
                <div className="postBox shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-5" key={post.slug.current}>
                  <Link to={"/blog/" + post.slug.current}>
                  <span key={index}>
                    <img src={post.mainImage.asset.url} alt="" className="rounded-t-md"/>
                    <div className="postTitle rounded-b-sm shadow-xl p-2 bg-green-600 text-white">
                      <h2 className="">{post.title}</h2>
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