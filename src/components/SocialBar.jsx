import React from "react";
function SocialBar() {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 w-12 py-4 flex flex-col items-center space-y-4 z-50">
      <a
        href="https://www.linkedin.com/in/YOUR_LINKEDIN"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-200 hover:scale-110 transition-transform duration-200"
      >
        <img
          src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
          alt=""
          className="w-6 h-6"
        />
      </a>
      <a
        href="https://github.com/YOUR_GITHUB"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-200 hover:scale-110 transition-transform duration-200"
      >
        <img
          src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000"
          alt=""
          className="w-6 h-6"
        />
      </a>
      <a
        href="mailto:your.email@example.com"
        className="text-white hover:text-gray-200 hover:scale-110 transition-transform duration-200"
      >
        <img
          src="https://img.icons8.com/?size=100&id=12623&format=png&color=000000"
          alt=""
          className="w-6 h-6"
        />
      </a>
    </div>
  );
}

export default SocialBar;
