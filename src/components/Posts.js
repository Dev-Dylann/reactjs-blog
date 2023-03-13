import React from "react";
import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <section className="p-4 ">
      {posts.length ? (
        posts.map((post) => <Feed key={post.id} post={post} />)
      ) : (
        <p className="my-8 text-center text-xl">No Posts to display</p>
      )}
    </section>
  );
};

export default Home;
