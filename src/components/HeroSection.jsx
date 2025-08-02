import { FileUser } from "lucide-react";
import React, { useState } from "react";
import SocialBar from "./SocialBar";
import Resume from "./Resume";

function HeroSection() {
  const [toggleResumeView, setToggleResumeView] = useState(false);
  return (
    <div className="min-h-screen w-full flex items-start justify-center text-center px-4 relative ">
      <div className="max-w-3xl ">
        <div className="flex justify-center">
          <img src="/ES.png" alt="logo" className="w-46 drop-shadow-sm" />
        </div>
        <div className="flex flex-col items-center justify-center text-center mb-6 space-y-4">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 drop-shadow-lg">
            Hey,
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            I’m <span className="text-blue-600 font-bold">SAAD ELGHABA</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-md">
            Full Stack Developer • Creative Thinker • Problem Solver
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
          >
            View My Projects
          </a>
          <div
            className="flex items-center lg:space-x-2  px-6 py-3 rounded-lg cursor-pointer  text-blue-600 border border-blue-600 hover:scale-105 transition"
            onClick={() => {
              setToggleResumeView(true);
            }}
          >
            <FileUser />
            <h2>My Resume</h2>
          </div>
        </div>
      </div>
      <SocialBar />
      {toggleResumeView && (
        <Resume isOpen={toggleResumeView} onClose={setToggleResumeView} />
      )}
    </div>
  );
}

export default HeroSection;
