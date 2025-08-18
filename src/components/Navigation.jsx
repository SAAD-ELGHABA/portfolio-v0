import {
  Boxes,
  ChartNoAxesGantt,
  Milestone,
  PhoneForwarded,
  UserSearch,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Navigation() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setIsVisible(scrollTop + windowHeight < docHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "about", icon: <UserSearch className="h-5 w-5" />, label: "About" },
    { id: "services", icon: <Boxes className="h-5 w-5" />, label: "Services" },
    {
      id: "projects",
      icon: <ChartNoAxesGantt className="h-5 w-5" />,
      label: "Projects",
    },
    {
      id: "contact",
      icon: <PhoneForwarded className="h-5 w-5" />,
      label: "Contact",
    },
    { id: "blog", icon: <Milestone className="h-5 w-5" />, label: "Blog" },
  ];
  return isVisible && location.pathname === "/" ? (
    <ul className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-3 md:gap-6 bg-white/70 backdrop-blur-md px-6 py-3 rounded-full shadow-lg z-50 transition-opacity duration-300">
      {navItems.map((item) => (
        <li
          key={item.id}
          className={`rounded-full px-3 py-2 transition ${
            activeSection === item.id
              ? "bg-blue-600 text-white hover:text-blue-300"
              : "hover:bg-blue-100 text-blue-600"
          }`}
        >
          <a
            href={`#${item.id}`}
            className={`font-semibold transition flex items-center lg:gap-2`}
          >
            {item.icon}
            <span className="hidden lg:block">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  ) : null;
}

export default Navigation;
