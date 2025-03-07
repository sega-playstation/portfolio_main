// File: src/App.jsx
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty("--global-scroll", window.scrollY + "px");
    };
    window.addEventListener("scroll", handleScroll);
    // Call once for initial load
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="parallax-container">
        <main className="pt-20">
          <section id="hero" className="py-20">
            <Hero />
          </section>
          <section id="projects" className="py-20">
            <Projects />
          </section>
          <section id="experience" className="py-20">
            <Experience />
          </section>
          <section id="skills" className="py-20">
            <Skills />
          </section>
          <section id="contact" className="py-20">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}
