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
      <ul className="flex justify-between gap-4 px-4 text-lg">
        {tabs.map((tab) => (
          <li
            key={tab.index}
            className="w-1/2 rounded-t-xl py-2 text-center"
            style={
              activeTab === tab.index
                ? { backgroundColor: "#4d72ee", color: "#e2e8f0" }
                : {}
            }
          >
            <Link
              className="font-medium"
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
