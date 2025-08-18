import React, { useEffect, useState } from "react";

import SplashScreen from "./components/SplashScreen.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Service from "./pages/Service.jsx";
import AnimatedBg from "./assets/AnimatedBg.jsx";
import NavBar from "./components/NavBar.jsx";
import Navigation from "./components/Navigation.jsx";
import Project from "./pages/Project.jsx";
import { Toaster } from "sonner";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <>
      <header className="fixed top-0 right-0 bg-transparent z-50 w-full">
        <NavBar />
      </header>
      <AnimatedBg />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:slug" element={<Service />} />
        <Route path="/project/:slug" element={<Project />} />
      </Routes>
      <Navigation />
      <Toaster />
    </>
  );
}

export default App;
