import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebars from "./components/Sidebars"; // Make sure Sidebars is imported
import "./index.css";



export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty("--global-scroll", window.scrollY + "px");
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      window.scrollTo(0, 0);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="parallax-container">
        <Sidebars />  {/* Add Sidebars for particles */}
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
          <Footer />
        </main>
      </div>
    </>
  );
}
