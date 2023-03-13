import React from "react";

const SearchPosts = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault}>
      <input
        type="text"
        placeholder="Search your posts"
        className="my-1 w-full rounded-lg border p-2 dark:bg-slate-400 dark:placeholder:text-slate-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchPosts;
