import { ChartNoAxesGantt, PhoneForwarded, UserSearch } from "lucide-react";
import React from "react";

function Navigation() {
  return (
    <ul className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-6 bg-white/50 backdrop-blur-md px-6 py-3 rounded-full shadow-lg z-50">
      <li>
        <a
          href="#home"
          className="text-black font-semibold hover:text-blue-600 transition flex items-center lg:gap-2"
        >
          <ChartNoAxesGantt className="h-5 w-5" />
          <span className="hidden lg:block">Projects</span>
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="text-black font-semibold hover:text-blue-600 transition flex items-center lg:gap-2"
        >
          <UserSearch className="h-5 w-5" />
          <span className="hidden lg:block">About</span>
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="text-black font-semibold hover:text-blue-600 transition flex items-center lg:gap-2"
        >
          <PhoneForwarded className="h-5 w-5" />
          <span className="hidden lg:block">Contact</span>
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
