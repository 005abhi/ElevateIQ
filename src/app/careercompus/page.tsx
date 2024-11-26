import { OSINTRoadmap } from "./components/OSINTRoadmap";
import { Sidebar } from "../components/Sidebar";
import ".//globals.css";

export default function Home() {
  return (
    <div className="layout">
      <div className="sidebar  ">
        <Sidebar />
      </div>
      <div className="home">
        <OSINTRoadmap />
      </div>
    </div>
  );
}
