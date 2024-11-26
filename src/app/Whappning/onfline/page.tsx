import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "../../components/Sidebar";
import "../globals.css";

export const page = () => {
  return (
    <main className="layout ">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="byte ">
        {/* body */}

        {/*1*/}

        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=13.048957158957775, 80.07543201349088+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Panimalar Engineering College, Nazarathpettai, Poonamallee,
                    Chennai, Tamil Nadu - 600123
                  </p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    {" "}
                    PECHACKS{" "}
                  </h2>
                  <a
                    href="https://pechacks.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    EMAIL
                  </h2>
                  <p className="leading-relaxed">team@pechacks.org</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/817/thumb/pechacks-banner.png?1701665560"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  PECHACKS 36-hr HACKATHON IN CHENNAI|JANUARY 27-28,2024
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  Welcome, Hackers! "Welcome to PEC HACKS, where innovation
                  meets impact! We are thrilled to invite you to this exciting
                  hackathon organized by Panimalar Engineering College. It is
                  your gateway to a world of possibilities, where passionate
                  individuals like you come together to unleash their
                  creativity, solve real-world challenges, and make a meaningful
                  difference." Prize Pool of ₹ 43 Lakh+ .
                </p>
              </a>
            </div>
          </div>
        </section>
        {/*2*/}

        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=22.572691678681693, 88.43737349682571+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    GURUKUL CAMPUS, Y-12, Sector - V, Salt Lake Electronics
                    Complex, Kolkata - 700091
                  </p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    {" "}
                    DIVERSION{" "}
                  </h2>
                  <a
                    href="https://diversion.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    EMAIL
                  </h2>
                  <p className="leading-relaxed">support@diversion.tech</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/877/thumb/MLH_Event_Banner.png?1703575338"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  DIVERSION INDIA'S FIRST AI POWERED HACKATHON
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  Welcome, Hackers! Diversion 2k24 is an annual 36 hour offline
                  hackathon conducted ACM-IEM student chapter. Participants
                  compete on tracks and problem statements and develop a
                  plethora of amazing projects from domains like Web
                  Development, App development , Blockchain, Machine Learning
                  and so on. It is an official MLH Member event supported by
                  Github , Filecoin , Solana , Replit and Devfolio. It is the
                  ultimate destination for developers to test and hone their
                  skills while getting the opportunity to connect with a budding
                  community of fellow tech enthusiasts.
                </p>
              </a>
            </div>
          </div>
        </section>
        {/*3*/}
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=23.23238987326168, 72.65352386800208+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">GANDHINAGAR GUJARAT</p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    {" "}
                    HACK THIS FALL{" "}
                  </h2>
                  <a
                    href="https://hackthisfall.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    EMAIL
                  </h2>
                  <p className="leading-relaxed">
                    mail:tohackthisfall@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/654/thumb/WhatsApp_Image_2023-06-28_at_6.38.12_PM.jpeg?1687957950"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl"></h3>
                HACK THIS FALL 4.0
                <p className="mt-2 max-w-sm text-gray-700">
                  Welcome, Hackers! We initiated the Hack This Fall Hackathon
                  with the goal of fostering a beginner-friendly environment
                  where people of diverse backgrounds can collaborate and create
                  meaningful projects, offering a true hackathon experience.
                  With three successful seasons of our flagship event in the
                  bag, we are thrilled to welcome hackers from all backgrounds
                  and skills at Hack This Fall Hackathon Season 4.
                </p>
              </a>
            </div>
          </div>
        </section>
        {/*4*/}

        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=12.966044274308505, 77.64205512552562+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    UrbanVault Indiranagar 2024 2024 16th Main Road Bengaluru,
                    KA 560008
                  </p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    AI OPEN HACK DAY{" "}
                  </h2>
                  <a
                    href="https://www.eventbrite.com/e/ai-open-hack-day-tickets-795260584817?aff=ebdssbcitybrowse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F671475349%2F1961593010163%2F1%2Foriginal.20240110-125926?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C77%2C1080%2C540&s=124a2404b1d6a1da4c0db7fac1cd9083"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  AI OPEN HACK DAY
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  Starting Jan 13, 2024, we’re conducting an “Open Hack Day” on
                  every first Saturday, where AI Enthusiasts enjoy a Saturday of
                  coding, creativity, chaotic brilliance and connect with other
                  individuals and organizations alike. Hack Day is an event
                  where you can avail FREE GPUs for 9 hours straight with an
                  option to pay for more on every 2nd Saturday of the month.
                </p>
              </a>
            </div>
          </div>
        </section>
        {/*5*/}
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=28.45042077700464, 77.28374025956998+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Manav Rachna International Institute Of Research And Studies
                    Manav Rachna Campus Road Faridabad, HR 121004
                  </p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    THE CLIMATE KNOWLEDGE HUNT HACKATHON{" "}
                  </h2>
                  <a
                    href="https://www.eventbrite.co.uk/e/the-climate-knowledge-hunt-hackathon-tickets-798805186817?aff=ebdssbdestsearch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F674894409%2F285961528991%2F1%2Foriginal.20240115-172537?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C0%2C1690%2C845&s=b3226e81b835099597edda571b8b70ca"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  THE CLIMATE KNOWLEDGE HUNT HACKATHON
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  You can register in teams of FIVE individuals of students or
                  early career researchers, everyone is welcome. Feel free to
                  experiment and improvise, maybe you canhave one teacher and
                  four students, or five freinds each with a different
                  expertise! There’s no set goal or outcome, but it is part of a
                  planned series of events where we will all be Learning by
                  Doing! We wish to invite 5-10 teams of upto Climate Change
                  enthusiasts or organisations on board, while aiming to:
                  Understand and create climate knowledge (esp. IPCC)
                  Learn/Develop human/machine knowledge systems Make new
                  contacts in the India Climate Landscape Feedback knowledge and
                  technology to ClimateHunt
                </p>
              </a>
            </div>
          </div>
        </section>

        {/*6*/}
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=12.958897554066898, 77.64835679668923+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Manav Rachna International Institute Of Research And Studies
                    Manav Rachna Campus Road Faridabad, HR 121004
                  </p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    BLOCKCHAIN,METAVERSE & AI SUMMIT
                  </h2>
                  <a
                    href="https://www.eventbrite.com/e/blockchain-metaverse-ai-summit-bangalore-on-14-15-march-2024-tickets-780874816597?aff=ebdssbdestsearch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F661560769%2F223751430406%2F1%2Foriginal.20231220-172315?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=81e3d3b99d55e0f37b346da4c31912ec"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  Blockchain, Metaverse & AI Summit- Bangalore on 14- 15 March
                  2024
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  Conference (March 14, 2024) Track 1 : Blockchain Advanced
                  Development/Use Cases Track 2 : Blockchain Technology- Impact
                  & Strategy
                </p>
              </a>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=12.971626727931042, 77.59456977756382+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Bangalore Virtual Workshop Bangalore, KA
                  </p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    BLOCKCHAIN,METAVERSE & AI SUMMIT
                  </h2>
                  <a
                    href="https://www.eventbrite.com/e/develop-a-successful-blockchain-tech-startup-business-today-entrepreneur-tickets-401880374017?aff=ebdssbdestsearch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F335070419%2F233567016891%2F1%2Foriginal.20220605-090034?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C874%2C437&s=da87282d7e54cf6c7dc139aad0fc3653"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  Develop a Successful Blockchain Tech Startup Business Today!
                  Entrepreneur
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  Develop a Successful Blockchain Tech Startup Business Today!
                  Always wanted to start an Blockchain Startup? Now we have a
                  complete blueprint for you start your own Blockchain Tech
                  Startup. During our Blockchain startup program you will learn
                  and navigate through tools, software, hardware, platforms,
                  resources, projects, processes, methods and strategies to
                  penetrate your own Blockchain Tech Startup into emerging
                  markets and industries
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
