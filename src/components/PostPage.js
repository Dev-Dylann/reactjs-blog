import React from "react";
import { useParams } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <section className="p-4">
      <h1 className="my-4 hidden text-2xl font-bold md:block">Post</h1>

      <h2 className="text-xl font-bold md:mt-10">{post.title}</h2>
      <p className="text-sm font-light text-slate-500">{post.datetime}</p>

      <article className="my-4">
        <p>{post.body}</p>
      </article>

      <button
        type="button"
        className="mt-2 rounded-lg bg-red-600 p-2 px-4 text-slate-50 hover:brightness-110"
        onClick={() => handleDelete(id)}
      >
        <FaTrash className="inline" /> Delete Post
      </button>
    </section>
  );
};

export default PostPage;
