import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Home (Hero) */}
        <section id="hero" className="py-20">
          <Hero />
        </section>

        {/* Projects */}
        <section id="projects" className="py-20">
          <Projects />
        </section>

        {/* Experience */}
        <section id="experience" className="py-20">
          <Experience />
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <Skills />
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </>
  );
}
