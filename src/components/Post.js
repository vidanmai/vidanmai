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
    //<img src={urlFor(postData.authorImage).width(100).url()} alt="" />
    //<p>Published {new Date(postData.publishedAt).toLocaleString().substring(0, 16)}</p>
    return (
        <div className="my-2 postCase lg:p-2">
            <div className="mx-auto postBody 2xl:w-2/5 xl:w-3/5 lg:w-3/5 md:w-4/5 md:p-5">
                <div className="postHead">
                    <h2 className="p-1 mb-8 text-5xl font-semibold tracking-wide text-center uppercase">{postData.title}</h2>
                    <div className="my-2 text-lg text-center" id="authorText">
                        <p>Written by {postData.name}
                        </p>
                    <p>Published {new Date(postData.publishedAt).toString().substring(4, 10)}</p>
                    </div>
                </div>
                <img className="postImg" src={urlFor(postData.mainImage).url()} alt="" />
                <div className="text-xl antialiased subpixel-antialiased body text" id="postBody">
                    <BlockContent
                        blocks={postData.body}
                        projectId={sanityClient.clientConfig.projectId}
                        dataset={sanityClient.clientConfig.dataset}
                    />
                </div>
            </div>
        </div>
    );
}