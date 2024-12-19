"use client";
import React from "react";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";

const videoUrls = [
  "https://youtube.com/embed/4Fannua_qiU?si?",
  "https://youtube.com/embed/qHGw8TqEGm8?",
  "https://youtube.com/embed/kZdipCwbc2I?si?",
  "https://youtube.com/embed/GTpGEtmyE9s?s?",
  "https://youtube.com/embed/Y2J27N1Bino?si?",
  "https://youtube.com/embed/CdN697NiTjA?si?",
  "https://youtube.com/embed/_nqSoFzD4i8?si?",
  "https://youtube.com/embed/-x51PAj_3-4?si?",
  "https://youtube.com/embed/TqFsheq2vTw?si?",
  "https://youtube.com/embed/WAURIqycgaQ?si?",
  "https://youtube.com/embed/pO9x6wahrg?si?",
  "https://youtube.com/embed/nC82yp64Q2Q?si?",
  "https://youtube.com/embed/dtjw8AaPJpg?s?",
  "https://youtube.com/embed/mPQtlia0F2o?si?",
  "https://youtube.com/embed/wKRCnQ0EEB8?si?",
];

const Page = () => {
  return (
    <main className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div
        className="byte"
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        {videoUrls.map((videoUrl, index) => (
          <div
            key={index}
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              scrollSnapAlign: "start",
            }}
          >
            <iframe
              width="500"
              height="700"
              src={videoUrl}
              title={`YouTube video player ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{
                border: "none",
                borderRadius: "10px",
              }}
            ></iframe>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
