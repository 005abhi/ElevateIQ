"use client";
import { Sidebar } from "./components/Sidebar";
import HomeContent from "./Home/page";
import ".//globals.css";

export default function App() {
  return (
    <div className="layout">
      <div className="sidebar  ">
        <Sidebar />
      </div>
      <div className="home">
        <HomeContent />
      </div>
      <style jsx>{`
        .app {
          display: flex;
          height: 100vh;
          background-color: #000;
          color: #fff;
        }
        .content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}
