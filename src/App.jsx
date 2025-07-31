import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import { skills_1 } from "./constants/skills_1.js";
import { skills_2 } from "./constants/skills_2.js";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import Projects from "./components/Projects.jsx";
import AnimatedBg from "./assets/AnimatedBg.jsx";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-fixed bg-cover bg-center">
      <AnimatedBg />
      <header className="fixed top-0 right-0 bg-transparent z-50 w-full">
        <NavBar />
      </header>

      <main className="pt-20 space-y-20">
        <FadeInWhenVisible delay={0.1}>
          <HeroSection />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="relative flex items-center justify-center max-h-screen ">
            <Profile />
          </div>
        </FadeInWhenVisible>
      </main>

      <FadeInWhenVisible delay={0.3}>
        <section className="py-4 w-full ">
          <div className="h-1 w-8 bg-gray-300 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>
          <Skills skills={skills_1} dir={true} />
          <Skills skills={skills_2} dir={false} />
        </section>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.3}>
        <section className="py-8 w-full ">
          <div className="h-1 w-8 bg-gray-300 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold mb-6 text-center">My Projects</h2>
          <Projects />
        </section>
      </FadeInWhenVisible>
      <Navigation />
    </div>
  );
}

export default App;
