import React from "react";
import Link from "next/link";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";

export const page = () => {
  return (
    <main className="layout w-full overflow-hidden">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="byte w-full">
        <div className="flex flex-col lg:flex-row w-full">
          {/* First Section */}
          <section className="text-gray-400 body-font flex-1  transition duration-300 ease-in-out transform hover:scale-90 w-full">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src="https://31.media.tumblr.com/980aa32387b22f82a878f252324e8db4/tumblr_mg1wabRW301qbe0gto1_500.gif"
              />
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  ONLINE EVENTS
                </h1>
                <p className="leading-relaxed mb-8">
                  TOP 2024 SUMMER TECH INTERNSHIP PROGRAMS FOR HACKERS
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    <Link href="../Whappning/online">Lets Go</Link>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Second Section */}
          <section className="text-gray-400 body-font flex-1  transition duration-300 ease-in-out transform hover:scale-90 w-full">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src="https://media0.giphy.com/media/RKGZNZLTbFkeJ7kZ4h/200w.webp?cid=ecf05e47zqqtjz9vlwgrejlq0bhur0gncxb203jyuux9k6u2&ep=v1_gifs_search&rid=200w.webp&ct=g"
              />
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  OFFLINE EVENTS
                </h1>
                <p className="leading-relaxed mb-8">
                  FIND, COMPETE, AND EARN POINTS AT THE LARGEST, MOST DIVERSE
                  HACKER EVENTS IN THE WORLD.
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    <Link href="../Whappning/onfline">Lets Go</Link>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default page;
