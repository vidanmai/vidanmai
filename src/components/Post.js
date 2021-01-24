// src/components/Post.js

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "./SanityClient.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import './style/post.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function Post() {
    const [postData, setPostData] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
                { slug }
            )
            .then((data) => setPostData(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!postData) return <div className="loading">Loading...</div>;
    return (
        <div className="body">
            <Link to={"/blog/"}>
                <button>Go back</button>
            </Link>
            <div>
                <h2 className="title">{postData.title}</h2>
                <div>
                    <img
                        src={urlFor(postData.authorImage).width(100).url()}
                        alt=""
                    />
                    <h4>Author: {postData.name}</h4>
                </div>
            </div>
            <img className="postImg" src={urlFor(postData.mainImage).url()} alt="" />
            <div>
                <BlockContent
                    blocks={postData.body}
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                />
            </div>
        </div>
    );
}