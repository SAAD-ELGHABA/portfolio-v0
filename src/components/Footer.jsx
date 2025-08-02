import React from "react";

function Footer() {
  return (
    <div className="min-h-[50vh] bg-[#155dfc] rounded-top mt-20 w-full  mx-auto p-8 text-white relative overflow-hidden">
      <div className="flex justify-center mb-6">
        <img
          src="/icon-footer.png"
          alt="logo"
          className="w-46 drop-shadow-md"
        />
      </div>

      <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-lg font-semibold">
        <li>
          <a href="#home" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
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
