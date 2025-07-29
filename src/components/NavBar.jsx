import { FileUser } from "lucide-react";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function NavBar() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="container mx-auto p-4 flex justify-center lg:justify-between items-center relative">
      {showLogo && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lex justify-between items-center backdrop-blur-sm py-2 px-4 rounded-xl bg-white/30 hover:bg-white/50 transition duration-300 shadow-lg"
        >
          <Logo />
        </motion.div>
      )}
    </nav>
  );
}

export default NavBar;
