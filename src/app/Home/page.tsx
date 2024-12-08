"use client";

import { ElementType, ReactElement } from "react";
import "./globals.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar></Navbar>
      </div>
      {/* Background Video */}
      <div>
        <video
          autoPlay
          loop
          muted
          id="background-video"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/video/a.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <header
          id="home"
          className="flex flex-col w-full h-screen items-center justify-center relative overflow-hidden"
        >
          <div className="flex flex-col justify-center items-center gap-4 sm:gap-8 text-center md:w-2/3">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl sm:text-5xl md:text-8xl font-black text-white">
                ElevateIQ
              </h1>
              <h2 className="text-sm sm:text-lg md:text-2xl text-white">
                Reskilling Workforce
              </h2>
            </div>
            <p className="max-w-xs sm:max-w-md text-xs sm:text-base text-zinc-300">
              ElevateIQ is a comprehensive platform that serves as a bridge
              between educational institutions and industry demands,
              facilitating seamless skill alignment and boosting employability
              among Indian youth.
            </p>
          </div>
        </header>

        <section
          id="about"
          className="h-auto min-h-screen w-full flex relative items-center justify-center p-4 sm:p-8"
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 sm:gap-8 max-w-7xl">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-white">
              Keeps you Updated on Tech World with these !!
            </h3>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {infoCards.map((infoCard, index) => (
                <InfoCard
                  key={index}
                  Icon={infoCard.icon}
                  title={infoCard.title}
                >
                  <div className="flex flex-col items-center justify-center mb-4 p-4">
                    <p className="text-xs sm:text-base text-center text-white">
                      {infoCard.bodyText}
                    </p>
                    <a
                      href={infoCard.href}
                      className="bg-fuchsia-700 rounded p-2 text-xs sm:text-sm transition-colors hover:bg-fuchsia-800 mt-2"
                    >
                      {infoCard.buttonText}
                    </a>
                  </div>
                </InfoCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

interface IInfoCardProps {
  title: string;
  Icon: ElementType;
  children: ReactElement<any, any>;
}

interface IInfoCardProps {
  title: string;
  Icon: ElementType;
  children: ReactElement<any, any>;
}

function InfoCard({ title, Icon, children }: IInfoCardProps) {
  return (
    <div className="w-full h-72 sm:h-80 flex flex-col justify-around items-center p-6 sm:p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
      <div className="p-4 bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-center">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

import {
  AlarmClockOff,
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  LucideIcon,
} from "lucide-react";

interface IInfoCard {
  title: string;
  bodyText: string;
  buttonText: string; // Add buttonText property
  icon: React.ElementType; // Assuming your icon type is a React element type
  id: number;
  href: string;
}

const infoCards: IInfoCard[] = [
  {
    title: "GameIt",
    bodyText:
      "Immerse yourself in the world of technology with GameIt! This page hosts an interactive QuizBot and an AI Chat Helper to challenge and enhance your tech knowledge.",
    buttonText: "Play Now", // Add buttonText
    icon: ArrowUpNarrowWide,
    id: 1,
    href: "../Gameit",
  },
  {
    title: "SkillHive",
    bodyText:
      "Showcase your tech prowess on Skillhive! Here, you can upload and display your tech projects, creating a portfolio that highlights your skills and accomplishments.",
    buttonText: "Explore", // Add buttonText
    icon: AlarmClockOff,
    id: 2,
    href: "../SkillHive/Login",
  },
  {
    title: "ByteBriefs",
    bodyText:
      "Stay informed in a flash with ByteBriefs! This page delivers tech news in short, concise forms, making it easy for you to stay updated on the latest happenings in the tech industry.",
    buttonText: "Read More", // Add buttonText
    icon: ArrowDownNarrowWide,
    id: 3,
    href: "../ByteBriefs",
  },
  {
    title: "ByteBriefs",
    bodyText:
      "Stay informed in a flash with ByteBriefs! This page delivers tech news in short, concise forms, making it easy for you to stay updated on the latest happenings in the tech industry.",
    buttonText: "Read More", // Add buttonText
    icon: ArrowDownNarrowWide,
    id: 3,
    href: "../ByteBriefs",
  },
  {
    title: "ByteBriefs",
    bodyText:
      "Stay informed in a flash with ByteBriefs! This page delivers tech news in short, concise forms, making it easy for you to stay updated on the latest happenings in the tech industry.",
    buttonText: "Read More", // Add buttonText
    icon: ArrowDownNarrowWide,
    id: 3,
    href: "../ByteBriefs",
  },
  {
    title: "ByteBriefs",
    bodyText:
      "Stay informed in a flash with ByteBriefs! This page delivers tech news in short, concise forms, making it easy for you to stay updated on the latest happenings in the tech industry.",
    buttonText: "Read More", // Add buttonText
    icon: ArrowDownNarrowWide,
    id: 3,
    href: "../ByteBriefs",
  },
];
