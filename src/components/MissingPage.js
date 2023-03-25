import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";

const MissingPage = () => {
  return (
    <section className="flex flex-col items-center gap-4 px-4 py-12 md:py-36">
      <FaExclamationCircle className="text-5xl text-accent" />

      <h2 className="text-2xl font-bold">Oops!</h2>

      <article className="space-y-2 px-4 text-center">
        <p>We can't seem to find the page you're looking for.</p>
        <Link
          to="/"
          className="font-light text-slate-500 hover:text-accent hover:underline dark:text-slate-400"
        >
          Go to Homepage
        </Link>
      </article>
    </section>
  );
};

export default MissingPage;
