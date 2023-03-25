import React from "react";
import { useState, useEffect } from "react";
import SearchPosts from "./SearchPosts";
import Feed from "./Feed";

const Home = ({ posts }) => {
  const [search, setSearch] = useState(``);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredPosts.reverse());
  }, [search, posts]);

  return (
    <section className="overflow-y-auto p-4 md:h-screen">
      <h1 className="my-4 hidden text-2xl font-bold md:block">Posts</h1>

      <SearchPosts search={search} setSearch={setSearch} />

      {searchResults.length ? (
        searchResults.map((post) => <Feed key={post.id} post={post} />)
      ) : (
        <p className="my-8 text-center text-xl">No Posts to display</p>
      )}
    </section>
  );
};

export default Home;
