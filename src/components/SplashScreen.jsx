import React from "react";
import AnimatedBg from "../assets/AnimatedBg";

function SplashScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white overflow-hidden relative">

      <div className="blob bg-blue-500 w-40 h-30 md:w-[300px] md:h-[200px] absolute z-0 opacity-90"></div>

      <div className="relative z-10 text-white text-xl md:text-3xl font-extrabold drop-shadow-md">
        ELGHABA.SAAD
      </div>
    </div>
  );
}

export default SplashScreen;
