"use client";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "./firebase"; // Adjust path based on your structure
const VideoComponent = () => {
  const [videoURLs, setVideoURLs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRef = ref(database, "/"); // Adjust path to your Firebase node
        const snapshot = await get(videoRef);
        if (snapshot.exists()) {
          setVideoURLs(Object.values(snapshot.val())); // Extract values
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {videoURLs.map((url, index) => (
        <div key={index}>
          <iframe
            width="560"
            height="315"
            src={url}
            title={`Video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoComponent;
