// src/components/Post.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "./SanityClient.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import './style/post.css';
import fidgetSpinner from './icons/fidgetspinner.png';

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
          publishedAt,
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

    if (!postData) return (
        <div className="loading">
            <img src={fidgetSpinner} alt="" className="animate-spin" />
        </div>
    );
    return (
        <div className="postCase py-5">
            <div className="postBody">
                <div className="postHead">
                    <h2 className="text-5xl p-1 text-center text-blue-500 font-semibold">{postData.title}</h2>
                    <div className="author">
                        <img src={urlFor(postData.authorImage).width(100).url()}
                            alt="" />
                        <p className="text-green-500">{postData.name}
                        </p>
                    </div>
                </div>
                <img className="postImg" src={urlFor(postData.mainImage).url()} alt="" />
                <div className="body">
                    <BlockContent
                        blocks={postData.body}
                        projectId={sanityClient.clientConfig.projectId}
                        dataset={sanityClient.clientConfig.dataset}
                    />
                    <br />
                    <p>Published at {new Date(postData.publishedAt).toLocaleDateString('en-GB')}</p>
                </div>
            </div>
        </div>
    );
}