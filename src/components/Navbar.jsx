import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const offsetShadow = {
    boxShadow: "8px 8px 0 #535253",
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primaryBg bg-opacity-90 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Social Links on the Left */}
        <div className="flex items-center space-x-4">
          {/* LinkedIn Block */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={offsetShadow}
            className="block p-2 bg-blue-600 rounded transition transform hover:scale-105 hover:bg-blue-700"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.8 0 54.1S24.09 0 53.79 0s53.79 24.29 53.79 54S83.49 108.1 53.79 108.1zM394.2 447.9h-92.68V302.4c0-34.7-12.42-58.4-43.45-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.6-2.9 13.5-2.9 21.4V448h-92.68s1.25-238.1 0-262.1h92.68v37.1c12.3-19 34.3-46.1 83.6-46.1 61 0 106.6 39.8 106.6 125.4V448z" />
            </svg>
          </a>
          {/* GitHub Block */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={offsetShadow}
            className="block p-2 bg-gray-800 rounded transition transform hover:scale-105 hover:bg-gray-700"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.7-5.2 3.7-3 0-5.3-1.7-5.3-3.7 0-2 2.3-3.7 5.2-3.7 3 0 5.3 1.7 5.3 3.7zm-30.8-6.2c-.7 1.5-2.6 2-4.2.9-1.6-1.1-2.2-3.1-1.5-4.6.7-1.5 2.6-2 4.2-.9 1.6 1.1 2.2 3.1 1.5 4.6zm44.3-1.7c-1.4 1.3-4.1.5-5.6-1.6-1.4-2.1-.6-4.7 1.4-6.1 2-1.4 4.6-.7 6 1.4 1.5 2.1.7 4.8-1.8 6.3zm32.4-6.1c-.1 2.3-2.5 4-5.6 4s-5.5-1.7-5.6-4c-.1-2.3 2.3-4 5.4-4s5.9 1.7 5.8 4zm25.4-1.3c-.8 1.9-3.2 2.9-5.6 2-2.4-1-3.5-3.1-2.7-5 .8-1.9 3.2-2.9 5.6-2 2.4 1 3.5 3.1 2.7 5zm32.1-6.8c-.4 1.8-2.8 3-5.4 2.5-2.7-.5-4.4-2.5-4-4.3.4-1.8 2.8-3 5.4-2.5 2.6.5 4.4 2.5 4 4.3zM248 8C111 8 0 119 0 256c0 110.5 71.6 204.1 170.8 237.2 12.5 2.3 17.1-5.4 17.1-12v-42.6c-69.5 15.1-84.1-33.6-84.1-33.6-11.4-29-27.9-36.7-27.9-36.7-22.8-15.6 1.7-15.3 1.7-15.3 25.2 1.8 38.5 25.9 38.5 25.9 22.4 38.4 58.8 27.3 73.2 20.9 2.3-16.2 8.8-27.3 16-33.7-55.5-6.3-113.8-27.8-113.8-123.7 0-27.3 9.7-49.7 25.6-67.2-2.6-6.3-11.1-31.9 2.4-66.5 0 0 20.9-6.7 68.4 25.6 19.9-5.5 41.2-8.2 62.4-8.3 21.2.1 42.5 2.8 62.4 8.3 47.5-32.3 68.4-25.6 68.4-25.6 13.5 34.6 5 60.2 2.4 66.5 15.9 17.5 25.6 39.9 25.6 67.2 0 96.1-58.5 117.3-114.3 123.4 9 7.8 17.1 23.3 17.1 46.9v69.6c0 6.7 4.6 14.4 17.2 12C424.4 460.1 496 366.5 496 256 496 119 385 8 248 8z" />
            </svg>
          </a>
        </div>

        {/* Navigation Links on the Right using Typewriter effect */}
        <div className="flex items-center space-x-4">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="inline-flex items-center border-b-2 border-transparent hover:border-black transition duration-200"
            >
              <span className="inline-block text-[#535253] hover:text-black font-bold">
                {mounted ? (
                  <Typewriter
                    words={[item.label]}
                    typeSpeed={50}
                    deleteSpeed={0}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    delaySpeed={index * 500}
                  />
                ) : (
                  item.label
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
