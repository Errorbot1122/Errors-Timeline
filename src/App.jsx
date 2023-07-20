import React from "react";

import Timeline from "./components/Timeline.jsx"

// Import and apply CSS stylesheet
import "./main.css";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col absolute top-0 left-0 bg-dark-gray-bg">
      
      <h1 className="text-white grow-0 text-center text-4xl font-bold my-6">Error's Timeline!</h1>
      
      <Timeline />   
    </div>
  );
}
