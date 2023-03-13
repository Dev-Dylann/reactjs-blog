import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ post }) => {
  return (
    <article className="flex flex-col gap-2 border-b py-2">
      <Link to={`post/${post.id}`}>
        <h2 className="text-xl">{post.title}</h2>
        <p className="text-sm font-light text-slate-500">{post.datetime}</p>
      </Link>

      <p>{post.body.length > 40 ? post.body.slice(0, 40) : post.body} ...</p>
    </article>
  );
};

export default Feed;