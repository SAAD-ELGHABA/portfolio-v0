import React from "react";

function Footer() {
  return (
    <div className="min-h-[50vh]  rounded-top mt-20 w-full  mx-auto p-8 relative overflow-hidden">
      <div className="flex justify-center mb-6">
        <img
          src="/ES.png"
          alt="logo"
          className="w-46 drop-shadow-md"
        />
      </div>

      <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-lg font-semibold">
        <li>
          <a href="#home" className="hover:underline hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:underline hover:text-blue-600">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm opacity-80">
        © 2025 ELGHABA SAAD. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
