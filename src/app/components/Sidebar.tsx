"use client";
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaBell,
  FaEnvelope,
  FaPlusCircle,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const Sidebar = () => {
  const menuItems = [
    {
      icon: (
        <div className="relative w-12 h-12">
          <Image
            src="/HOME.png"
            layout="fill"
            className="object-contain"
            alt="Home Icon"
          />
        </div>
      ),
      label: "Home",
      href: "/",
    },
    {
      icon: (
        <div className="relative w-12 h-12">
          <Image
            src="/GAMEIT.png"
            layout="fill"
            className="object-contain"
            alt="Gameit Icon"
          />
        </div>
      ),
      label: "GAMEIT",
      href: "/Gameit",
    },
    {
      icon: (
        <div className="relative w-12 h-12">
          <Image
            src="/SKILLHIVE.png"
            layout="fill"
            className="object-contain"
            alt="Skillhive Icon"
          />
        </div>
      ),
      label: "SKILLHIVE",
      href: "/skillhive",
    },
    {
      icon: (
        <div className="relative w-12 h-12">
          <Image
            src="/WHAPPNING.png"
            layout="fill"
            className="object-contain"
            alt="Bytebriefs Icon"
          />
        </div>
      ),
      label: "BYTEBRIEFS",
      href: "/ByteBriefs",
    },
    {
      icon: (
        <div className="relative w-12 h-12">
          <Image
            src="/BYTEBRIFES.png"
            layout="fill"
            className="object-contain"
            alt="Whappning Icon"
          />
        </div>
      ),
      label: "WHAPPNING",
      href: "/Whappning",
    },
    {
      icon: (
        <div className="relative w-12 h-12">
          <Image
            src="/j.png"
            layout="fill"
            className="object-contain"
            alt="Jobbit Icon"
          />
        </div>
      ),
      label: "JOBIT",
      href: "/Jobbit",
    },
    {
      icon: (
        <div className="relative w-12 h-12">
          <Image
            src="/CC.jpg"
            layout="fill"
            className="object-contain"
            alt="Careercompus Icon"
          />
        </div>
      ),
      label: "CAREERCOMPUS",
      href: "/careercompus",
    },
  ];

  return (
    <div className="flex flex-col gap-1 p-5">
      <div
        style={{
          fontFamily: "'Emilys Candy', cursive",
          display: "flex", // Use flexbox
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          height: "100%", // Ensure it takes the full container height
        }}
        className="text-white font-bold text-xl mb-4 gap-2 p-2 text-gray-700"
      >
        ELEVATEIQ
      </div>

      {menuItems.map((item, index) => (
        <Link key={index} href={item.href} passHref>
          <div className="menu-item">
            {item.icon}
            <span>{item.label}</span>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .sidebar {
          width: 200px;
          height: 100%; /* Full viewport height */
          background: #d1d5db; /* Gray-400 color */
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0;
          position: fixed; /* Make the sidebar fixed */
          top: 0;
          left: 0;
          overflow: hidden; /* Prevent scrolling within the sidebar */
        }
        .menu-item {
          display: flex;
          justify-content: start;
          align-items: center;
          width: 100%; /* Full width for left-right spacing */
          padding: 0.5rem 1rem;
          color: #fff;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .menu-item:hover {
          color: #00ffab;
          transform: scale(1.1);
        }
        .menu-item span {
          font-size: 15px;
          margin-right: 30px; /* Add gap between text and image */
        }
      `}</style>
    </div>
  );
};
