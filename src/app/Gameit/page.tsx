import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";

const page: React.FC = () => {
  return (
    <main className="layout w-full overflow-hidden">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="byte w-full"></div>
      <div className="flex">
        {/* First Section */}
        <section className="text-gray-400  body-font flex-1 py-13">
          <div className="container mx-auto flex px-5 items-center justify-center flex-col">
            <div className=" p-8 rounded-lg transition-transform transform hover:scale-90">
              <img
                src="https://media.tenor.com/tGFp68ulbMIAAAAi/pom-bot.gif"
                alt="GIF from Giphy"
                className="py-3"
              />
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                AI QUIZBOT
              </h1>
              <p className="mb-3 text-white">
                "Unlock your full potential in computer science with our
                personalized Quizbot. Tailored to your goals and pace, our
                quizbot guides you through the intricacies of computer science,
                ensuring a comprehensive and personalized learning experience."
              </p>
              <div className="flex justify-center">
                <a
                  href="../Gameit/Aiquizbot/"
                  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative text-white">Let's Go</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="text-gray-400  body-font flex-1 py-13">
          <div className="container mx-auto flex px-5 items-center justify-center flex-col">
            <div className=" p-8 rounded-lg transition-transform transform hover:scale-90">
              <img
                src="https://media.tenor.com/2YQj1-QHrtMAAAAi/vutura-chatbot.gif"
                alt="GIF from Giphy"
                className="py-5"
              />
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                AI CAREER HELPER
              </h1>
              <p className="mb-3 text-white">
                "Meet your AI career companion – a personalized guide to
                professional success. Our platform leverages artificial
                intelligence to offer tailored advice and roadmaps, ensuring
                your career journey aligns with your aspirations. Navigate
                through milestones with confidence and clarity.
              </p>
              <div className="flex justify-center">
                <a
                  href="../Gameit/Aichat/"
                  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative text-white">Let's Go</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
