"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory
import "./globals.css";
import { Sidebar } from "../components/Sidebar";
import { Url } from "next/dist/shared/lib/router/router";

const programs = [
  {
    title: "Product Design",
    description: "Make products users love. Learn the product design process.",
    buttonText: "View program",
    route: "/careercompus/pages/A", // Route for this program
  },
  {
    title: "UX Design",
    description:
      "Make the web usable for everyone. Become fluent in the UX design process.",
    buttonText: "View program",
    students: "14,000+ students enrolled in our programs",
    imageAlt: "UX Design",
    route: "/programs/ux-design", // Route for this program
  },
  {
    title: "UI Design",
    description:
      "Make the web beautiful. Learn to design a complete application from scratch.",
    buttonText: "View program",
    students: "14,000+ students enrolled in our programs",
    imageAlt: "UI Design",
    route: "/programs/ui-design", // Route for this program
  },
];

export default function ProgramCards() {
  const router = useRouter(); // Initialize router

  const handleNavigation = (route: any) => {
    router.push(route); // Navigate to the route
  };

  return (
    <main className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="byte">
        <div className="container">
          <div className="card-grid">
            {programs.map((program, index) => (
              <div key={index} className="card">
                <div className="badge">
                  <span>Job Guarantee</span>
                  <span>Dual Mentorship</span>
                </div>
                <h2 className="title">{program.title}</h2>
                <p className="description">{program.description}</p>
                <button
                  className="button"
                  onClick={() => handleNavigation(program.route)}
                >
                  {program.buttonText}
                </button>
                <p className="students">{program.students}</p>
              </div>
            ))}
          </div>
          <style jsx>{`
            .container {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 20px;
              background-color: rgb(0, 0, 0);
            }

            .card-grid {
              display: flex;
              flex-wrap: wrap;
              gap: 20px;
              justify-content: center;
            }

            .card {
              background: gray;
              border-radius: 12px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              padding: 20px;
              width: 300px;
              display: flex;
              flex-direction: column;
              gap: 10px;
              transition: transform 0.3s ease;
            }

            .card:hover {
              transform: translateY(-10px);
            }

            .badge {
              display: flex;
              gap: 10px;
              margin-bottom: 10px;
              font-size: 0.9rem;
              color: white;
            }

            .title {
              font-size: 1.5rem;
              font-weight: 600;
              color: white;
            }

            .description {
              font-size: 1rem;
              color: white;
            }

            .button {
              background-color: black;
              color: white;
              border: none;
              padding: 10px 15px;
              font-size: 1rem;
              border-radius: 8px;
              cursor: pointer;
              margin: 10px 0;
            }

            .button:hover {
              background-color: #333;
            }

            .students {
              font-size: 0.9rem;
              color: white;
              margin-top: auto;
            }

            @media (max-width: 768px) {
              .card-grid {
                flex-direction: column;
                align-items: center;
              }
            }
          `}</style>
        </div>
      </div>
    </main>
  );
}
