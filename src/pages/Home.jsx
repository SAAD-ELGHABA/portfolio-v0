import React from "react";
import HeroSection from "../components/HeroSection";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import { skills_1 } from "../constants/skills_1.js";
import { skills_2 } from "../constants/skills_2.js";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Services from "../components/Services.jsx";
function Home() {
  return (
    <div className="relative min-h-screen w-full bg-fixed bg-cover bg-center">
      <main className="pt-20 ">
        <FadeInWhenVisible delay={0.1}>
          <HeroSection />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <section
            className="relative flex items-center justify-center max-h-screen "
            id="about"
          >
            <Profile />
          </section>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <section className="py-4 w-full ">
            <div className="h-1 w-8 bg-gray-300 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>
            <Skills skills={skills_1} dir={true} />
            <Skills skills={skills_2} dir={false} />
          </section>
        </FadeInWhenVisible>
      </main>
      <FadeInWhenVisible delay={0.2}>
        <Services />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.3}>
        <section className="py-16 w-full " id="projects">
          <div className="h-1 w-8 bg-gray-300 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold mb-6 text-center">My Projects</h2>
          <Projects />
        </section>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.3}>
        <Contact />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.3}>
        <Footer />
      </FadeInWhenVisible>
    </div>
  );
}

export default Home;
