import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      index: 1,
      title: `Posts`,
      path: `/`,
    },
    {
      index: 2,
      title: `Create`,
      path: `/create`,
    },
  ];

  return (
    <nav>
      <ul className="flex justify-between gap-4 px-4 text-lg md:flex-col md:py-2 md:pl-0 md:pr-4">
        {tabs.map((tab) => (
          <li
            key={tab.index}
            className="w-1/2 rounded-t-xl py-2 text-center hover:border hover:border-accent md:flex md:w-full md:justify-end md:rounded-r-full md:rounded-tl-none "
            style={
              activeTab === tab.index
                ? { backgroundColor: "#6586f1", color: "#f1f5f9" }
                : {}
            }
          >
            <Link
              className="text-left font-medium md:block md:w-20"
              onClick={() => setActiveTab(tab.index)}
              to={tab.path}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
