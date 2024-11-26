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

export const Sidebar = () => {
  const menuItems = [
    { icon: <FaHome />, label: "Home", href: "/" },
    { icon: <FaSearch />, label: "GAMEIT", href: "/Gameit" },
    { icon: <FaCompass />, label: "SKILLHIVE", href: "/skillhive" },
    { icon: <FaEnvelope />, label: "BYTEBRIEFS", href: "/ByteBriefs" },
    { icon: <FaBell />, label: "WHAPPNING", href: "/Whappning" },
    { icon: <FaPlusCircle />, label: "JOBIT", href: "/Jobbit" },
    { icon: <FaUser />, label: "CAREERCOMPUS", href: "/careercompus" },
  ];

  return (
    <div className="flex flex-col gap-3 p-4">
      <div
        style={{
          fontFamily: "'Emilys Candy', cursive",
          display: "flex", // Use flexbox
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          height: "100%", // Ensure it takes the full container height
        }}
        className="text-white font-bold text-xl mb-4 gap-2 p-2 text-gray-700 hover:text-gray-900"
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
          width: 150px;
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
          flex-direction: column;
          align-items: center;
          margin: 1rem 0;
          color: #fff;
          cursor: pointer;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .menu-item:hover {
          color: #00ffab;
          transform: scale(1.1);
        }
        .menu-item span {
          font-size: 15px;
          margin-top: 9px;
        }
      `}</style>
    </div>
  );
};
