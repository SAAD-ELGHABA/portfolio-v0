import { ChartNoAxesGantt } from "lucide-react";
import React from "react";

function Profile() {
  return (
    <div className="max-h-screen w-full  mx-auto rounded-xl text-center relative -top-20 p-8 flex flex-col items-center">
      <img
        src="/cv-pic-v2-28-07-25.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full shadow-md border-2 border-white -mt-20"
      />

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
        Saad Elghaba
      </h2>

      <p className="text-blue-600 text-lg mb-4">Full-Stack Web Developer</p>

      <p className="text-gray-600 w-ful lg:max-w-xl">
        Passionate about building fast, responsive, and scalable web apps using
        React, Laravel, Node.js, and Python. I love turning ideas into real-life
        solutions and collaborating with other developers.
      </p>

      <div className="mt-6 flex lg:flex-row flex-col gap-4 justify-center w-full">
        <a
          href="#contact"
          className=" bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
        <a
          href="#projects"
          className="border border-blue-600 justify-center text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition flex items-center space-x-2"
        >
          <ChartNoAxesGantt className="h-5 w-5" />
          <span>View Projects</span>
        </a>
      </div>
    </div>
  );
}

export default Profile;
