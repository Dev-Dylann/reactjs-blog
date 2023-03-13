import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";

const MissingPage = ({ setActiveTab }) => {
  setActiveTab(0);

  return (
    <section className="flex flex-col items-center gap-4 px-4 py-12">
      <FaExclamationCircle className="text-5xl" />

      <h2 className="text-2xl font-medium">Oops...</h2>

      <article className="space-y-2 px-4 text-center">
        <p>We can't seem to find the page you're looking for.</p>
        <Link
          to="/"
          className="text-underline font-light text-slate-500 dark:text-slate-400"
        >
          Go to Homepage
        </Link>
      </article>
    </section>
  );
};

export default MissingPage;
