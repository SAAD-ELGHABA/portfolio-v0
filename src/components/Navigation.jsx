import {
  ChartNoAxesGantt,
  Milestone,
  PhoneForwarded,
  UserSearch,
} from "lucide-react";
import React, { useEffect, useState } from "react";

function Navigation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // If user scrolled to the bottom
      if (scrollTop + windowHeight >= docHeight - 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible ? (
    <ul className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-6 bg-white/70 backdrop-blur-md px-6 py-3 rounded-full shadow-lg z-50 transition-opacity duration-300">
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
          <Milestone className="h-5 w-5" />
          <span className="hidden lg:block">Blog</span>
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
  ) : null;
}

export default Navigation;
