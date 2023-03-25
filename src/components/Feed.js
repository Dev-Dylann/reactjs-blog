import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ post }) => {
  return (
    <article className="flex flex-col gap-2 border-b py-2">
      <Link
        to={`post/${post.id}`}
        className="hover:text-accent hover:underline"
      >
        <h2 className="text-xl font-medium">{post.title}</h2>
        <p className="text-sm font-light text-slate-500 dark:text-slate-400">
          {post.datetime}
        </p>
      </Link>

      <p>{post.body.length > 40 ? post.body.slice(0, 40) : post.body} ...</p>
    </article>
  );
};

export default Feed;
