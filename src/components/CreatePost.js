import React from "react";

const NewPost = ({ title, body, setTitle, setBody, handleCreatePost }) => {
  return (
    <section className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Create New Post</h2>

      <form action="" className="flex flex-col" onSubmit={handleCreatePost}>
        <label htmlFor="title" className="text-lg font-medium">
          Title:
        </label>
        <input
          id="title"
          type="text"
          className="my-1 rounded-lg border p-2 dark:bg-slate-400"
          autoFocus
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="body" className="mt-4 text-lg font-medium">
          Post body:
        </label>
        <textarea
          id="body"
          cols="30"
          rows="10"
          className="my-1 resize-none rounded-lg border p-2 dark:bg-slate-400"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="my-4 rounded-lg bg-accent py-2 font-medium text-slate-200"
        >
          Submit Post
        </button>
      </form>
    </section>
  );
};

export default NewPost;
