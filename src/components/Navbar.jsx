import React, { useEffect, useState } from "react";
import SmoothTypewriter from "./TypewriterGlitch";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.4 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-primaryBg bg-opacity-90 backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-4 md:px-8 h-16">
          {/* Social icons: LinkedIn and GitHub */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/stephen-kryw"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 bg-blue-600 rounded transition transform hover:scale-105 hover:bg-blue-700"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 448 512">
                {/* LinkedIn Icon */}
                <path d="M100.28 448H7.4V148.9h92.88zm-46.49-339.9c-30.69 0-53.79-24.3-53.79-54.1S23.1 0 53.79 0 107.6 24.3 107.6 54.1 84.48 108.1 53.79 108.1zM447.9 448h-92.68V302.4c0-34.7-12.42-58.4-43.45-58.4-23.7 0-37.76 15.9-44 31.3-2.26 5.6-2.84 13.5-2.84 21.4V448H172.84V185.9h89.1v35.9h1.3c12.4-23.5 42.6-48.3 87.74-48.3 62.7 0 109.92 41 109.92 129.2V448z"/>
              </svg>
            </a>
            <a
              href="https://github.com/sega-playstation?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 bg-gray-800 rounded transition transform hover:scale-105 hover:bg-gray-700"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 496 512">
                {/* GitHub Icon */}
                <path d="M165.9 397.4c0 2-2.3 3.7-5.2 3.7-3 0-5.3-1.7-5.3-3.7 0-2 2.3-3.7 5.2-3.7 3 0 5.3 1.7 5.3 3.7zm-30.8-6.2c-.7 1.5-2.6 2-4.2.9-1.6-1.1-2.2-3.1-1.5-4.6.7-1.5 2.6-2 4.2-.9 1.6 1.1 2.2 3.1 1.5 4.6zm44.3-1.7c-1.4 1.3-4.1.5-5.6-1.6-1.4-2.1-.6-4.7 1.4-6.1 2-1.4 4.6-.7 6 1.4 1.5 2.1.7 4.8-1.8 6.3zm32.4-6.1c-.1 2.3-2.5 4-5.6 4s-5.5-1.7-5.6-4c-.1-2.3 2.3-4 5.4-4s5.9 1.7 5.8 4zm25.4-1.3c-.8 1.9-3.2 2.9-5.6 2-2.4-1-3.5-3.1-2.7-5 .8-1.9 3.2-2.9 5.6-2 2.4 1 3.5 3.1 2.7 5zm32.1-6.8c-.4 1.8-2.8 3-5.4 2.5-2.7-.5-4.4-2.5-4-4.3.4-1.8 2.8-3 5.4-2.5 2.6.5 4.4 2.5 4 4.3zM248 8C111 8 0 119 0 256c0 110.5 71.6 204.1 170.8 237.2 12.5 2.3 17.1-5.4 17.1-12v-42.6c-69.5 15.1-84.1-33.6-84.1-33.6-11.4-29-27.9-36.7-27.9-36.7-22.8-15.6 1.7-15.3 1.7-15.3 25.2 1.8 38.5 25.9 38.5 25.9 22.4 38.4 58.8 27.3 73.2 20.9 2.3-16.2 8.8-27.3 16-33.7-55.5-6.3-113.8-27.8-113.8-123.7 0-27.3 9.7-49.7 25.6-67.2-2.6-6.3-11.1-31.9 2.4-66.5 0 0 20.9-6.7 68.4 25.6 19.9-5.5 41.2-8.2 62.4-8.3 21.2.1 42.5 2.8 62.4 8.3 47.5-32.3 68.4-25.6 68.4-25.6 13.5 34.6 5 60.2 2.4 66.5 15.9 17.5 25.6 39.9 25.6 67.2 0 96.1-58.5 117.3-114.3 123.4 9 7.8 17.1 23.3 17.1 46.9v69.6c0 6.7 4.6 14.4 17.2 12C424.4 460.1 496 366.5 496 256 496 119 385 8 248 8z"/>
              </svg>
            </a>
          </div>

          {/* Main Navigation Links */}
          <div className="flex items-center space-x-4 navbar-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`inline-flex items-center border-b-2 transition duration-200 font-bold ${
                  activeSection === item.id
                    ? "text-black border-black"
                    : "text-[#535253] border-transparent hover:text-black hover:border-black"
                }`}
              >
                <SmoothTypewriter text={item.label} />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Navbar (Mobile Only) */}
      <div className="navbar-bottom">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`${
              activeSection === item.id ? "active" : ""
            }`}
          >
            <SmoothTypewriter text={item.label} />
          </button>
        ))}
      </div>
    </>
  );
}
