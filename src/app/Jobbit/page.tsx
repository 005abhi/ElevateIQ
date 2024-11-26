"use client";
import React from "react";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";

const videoUrls = [
  "https://youtube.com/embed/qHGw8TqEGm8?",
  "https://youtube.com/embed/4Fannua_qiU?",
  "https://youtube.com/embed/kZdipCwbc2I?",
  "https://youtube.com/embed/GTpGEtmyE9s?",
  "https://youtube.com/embed/Y2J27N1Bino?",
  "https://youtube.com/embed/CdN697NiTjA?",
  "https://youtube.com/embed/_nqSoFzD4i8?",
  "https://youtube.com/embed/-x51PAj_3-4?",
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
