import React, { useState } from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="h" style={{ paddingLeft: "245px" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ul className="font-bold text-xl flex flex-col p-8 md:p-0 mt-4 rounded-lg bg-gray-50 bg-opacity-75 md:flex-row md:space-x-16 space-y-6 md:space-y-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <a
              href="/Gameit"
              className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              GAMEIT
            </a>
          </li>
          <li>
            <a
              href="/skillhive"
              className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              SKILLHIVE
            </a>
          </li>
          <li>
            <a
              href="/ByteBriefs"
              className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              BYTEBRIEFS
            </a>
          </li>
          <li>
            <a
              href="/Whappning"
              className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              WHAPPNING
            </a>
          </li>
          <li>
            <a
              href="/Jobbit"
              className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              JOBIT
            </a>
          </li>
          <li>
            <a
              href="/careercompus"
              className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              CAREERCOMPUS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
