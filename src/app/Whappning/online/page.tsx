import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const page = () => {
  return (
    <main style={{ backgroundColor: "#111827" }}>

<Navbar/>
      <ul className="flex" style={{ paddingTop: "70px" }}>


        <li>
          <button ><Link href='../Whappning/onfline'>
            <div className="flex items-center justify-center" style={{ paddingLeft: "650px" }}>
              <a href="#_" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">OFFLINE EVENTS</span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>
            </div>
          </Link></button>
        </li>
        <li>
          <button ><Link href='../Whappning/all'>
            <div className="flex items-center justify-center" style={{ paddingLeft: "100px" }}>
              <a href="#_" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">ALL EVENTS</span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>
            </div>
          </Link></button>
        </li>



      </ul>





      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/213/153/thumb/IG.jpg?1728917585" />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">Global Hack Week: DATA</h2>
              <p className="text-white leading-relaxed mt-2">DECEMBER 6TH-12TH , 2024 
              Spend a week hacking with the MLH community at GHW Data Week! Come learn job ready technical skills like how to program in SQL, implement a database, and build data visualizations.
                </p>
              <a href="https://events.mlh.io/events/11596?_gl=1*jx48gs*_ga*NTk1MzU5NzExLjE3MzM2NzMzNTM.*_ga_E5KT6TC4TK*MTczMzY4MzI3OC40LjEuMTczMzY4MzU1Ny4wLjAuMA.." target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                REGISTER HERE
              </button>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                </svg>
              </a>
            </div>


            <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://events.mlh.io/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBclFvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e11df45b0049b13cedd131085672dd03174930ea/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFeU1EQjROakF3SVFZN0JsUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e95a9989726607e7d6ee02cb34a6a4d9a8bf29c1/website.jpg" />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">Hacks for Hackers</h2>
              <p className="text-white leading-relaxed mt-2">Friday January 3, 2025

              We invite you to hack on projects that define your hacker journey. Build creative hacks that empower you and your fellow hackers to do more and celebrate the new year with us.

Whether you build something on the theme or not, focus on having fun. While we'd love to have you build something on the theme, our themes are only here for inspiration. Please build whatever you'd like!</p>
              <a href="https://events.mlh.io/events/11516?_gl=1*1obdtpf*_ga*NTk1MzU5NzExLjE3MzM2NzMzNTM.*_ga_E5KT6TC4TK*MTczMzY4MzI3OC40LjEuMTczMzY4Mzc1MC4wLjAuMA.." target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                REGISTER HERE
              </button>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                </svg>
              </a>
            </div>

            <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://events.mlh.io/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBclFvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e11df45b0049b13cedd131085672dd03174930ea/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFeU1EQjROakF3SVFZN0JsUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e95a9989726607e7d6ee02cb34a6a4d9a8bf29c1/website.jpg" />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">Global Hack Week: Beginners Week</h2>
              <p className="text-white leading-relaxed mt-2">Friday January 10, 2025
              Spend a week hacking with the MLH community at GHW Beginners Week! Global Hack Week takes place throughout the year to give you a chance to complete technical challenges, network with the community, enjoy fun live sessions, build technical projects, and make new memories.</p>
              <a href="https://events.mlh.io/events/11516?_gl=1*1obdtpf*_ga*NTk1MzU5NzExLjE3MzM2NzMzNTM.*_ga_E5KT6TC4TK*MTczMzY4MzI3OC40LjEuMTczMzY4Mzc1MC4wLjAuMA.." target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                REGISTER HERE
              </button>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                </svg>
              </a>
            </div>


            <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://events.mlh.io/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHN0IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bf39a804d824d4c39351136cda7ea1d0da509deb/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFeU1EQjROakF3SVFZN0JsUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e95a9989726607e7d6ee02cb34a6a4d9a8bf29c1/beginner%20website.jpg" />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">Global Hack Week: Beginners Week Friday January 10, 2025</h2>
              <p className="text-white leading-relaxed mt-2"> Spend a week hacking with the MLH community at GHW Beginners Week! Global Hack Week takes place throughout the year to give you a chance to complete technical challenges, network with the community, enjoy fun live sessions, build technical projects, and make new memories.</p>
              <a href="https://events.mlh.io/events/11842?_gl=1*577sa*_ga*NTk1MzU5NzExLjE3MzM2NzMzNTM.*_ga_E5KT6TC4TK*MTczMzY4MzI3OC40LjEuMTczMzY4NDIwMS4wLjAuMA.." target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                REGISTER HERE
              </button>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                </svg>
              </a>
            </div>

            <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1731997275507-SBI.Banner_2.png" />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">HACK-AI-THON 2024
              SUN, DEC 15, 2024 (IST)
              </h2>
              <p className="text-white leading-relaxed mt-2">Welcome to SBI Life presents HACK-AI-THON 2024, powered by Hack2skill, where innovation meets artificial intelligence to shape the future of technology.

 
              </p>
              <a href="https://vision.hack2skill.com/event/hackaithon2024/?utm_source=h2shomepage&utm_medium=h2shomepage&sectionid=66d9383074bcc1453eeb5a83" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                REGISTER HERE
              </button>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                </svg>
              </a>
            </div>

            <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-10-08T07%3A09%3A24.386Z-homepage.AIFI.png" />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">APAC Hackathon</h2>
              <p className="text-white leading-relaxed mt-2">The AI for Impact Hackathon, presented by Google Cloud and powered by Hack2skill, is a unique opportunity to leverage the transformative power of AI to address pressing social challenges across the APAC region. By utilizing Google’s GenAI tools, including Gemma, Gemini, Vertex AI, and Gemini Code Assist, participants will have the chance to create innovative solutions that can drive meaningful change and improve lives. By harnessing the potential of Google’s cutting-edge technologies, develop solutions that address a wide range of societal issues, from healthcare and education to sustainability and accessibility.
              </p>
              <a href="https://vision.hack2skill.com/event/aiforimpact_reg?utm_source=hack2skill&utm_medium=homepage" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                REGISTER HERE
              </button>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                </svg>
              </a>
            </div>

            











          </div>
        </div>
      </section>

      <Footer/>
    </main >
  )
}
function Navbar() {
  return (
    <div className='w-full h-20 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <Image
            src="/h.png"
            alt="Logo Alt Text"
            width={70} // Adjust the width as needed
            height={70} // Adjust the height as needed
            className="rounded-full"
          />
          <h6 className='font-bold ml-2 text-lg'>ELEVATEIQ</h6>
        </div>
        <ul className='flex gap-8'>
        <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Home">HOME</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Gameit/">GAMEIT</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../SkillHive/Login">SKILLHIVE</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../ByteBriefs/">BYTEBRIEFS</Link></li>
          <li><Link className='text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Whappning/">WHAPPNING</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Jobbit/">JOBBIT</Link></li>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className='w-full h-20 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Image
              src="/h.png"
              alt="Logo Alt Text"
              width={100}
              height={100}
              className="rounded-full"
            />

            <span className="ml-3 text-xl">ELEVATE IQ</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2024 ELEVATEIQ —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @TEAM BOTS
            </a>
          </p>
          <div style={{paddingLeft:"600px"}}>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <button>
              <a className="ml-3 text-gray-400">
                <Link href="/aboutus">
                  <h6><center>ABOUT US</center></h6>
                  <svg fill="#ffffff" width="20" height="20" viewBox="0 0 128 128" id="Layer_1" version="1.1" >
                    <g>
                      <path d="M64,1C29.3,1,1,29.3,1,64s28.3,63,63,63s63-28.3,63-63S98.7,1,64,1z M64,119C33.7,119,9,94.3,9,64S33.7,9,64,9   s55,24.7,55,55S94.3,119,64,119z" />
                      <rect height="40" width="8" x="60" y="54.5" />
                      <rect height="8" width="8" x="60" y="35.5" />
                    </g>
                  </svg>
                </Link>
              </a>
            </button>
          </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default page;