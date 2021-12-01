// src/components/BlogPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./SanityClient";
import './style/blog.css';

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
      <div className="py-10 case blog">
        <h1 className="text-3xl font-bold text-center uppercase">Latest Posts</h1>
        <div className="py-10 postGrid">
          {blogPostsData &&
            blogPostsData.map((post, index) => (
              <div className="postBox" key={post.slug.current}>
                <Link to={"/blog/" + post.slug.current}>
                  <span key={index}>
                    <img src={post.mainImage.asset.url} alt="" />
                    <div className="p-2 postTitle">
                      <h2 className="font-bold">{post.title}</h2>
                      <p className="text-xs postDate">{new Date(post.publishedAt).toLocaleDateString('en-GB')}</p>
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