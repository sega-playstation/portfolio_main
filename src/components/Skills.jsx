import { useState, useRef } from "react";
import Container from "../components/Container";
import Slider from "react-slick";
import Particles from "@tsparticles/react";

// ParticleBackground component
function ParticleBackground() {
  const particlesOptions = {
    fpsLimit: 60,
    background: {
      color: { value: "#0D1317" }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    particles: {
      color: { value: "#BFEDC1" },
      links: { enable: true, color: "#BFEDC1", distance: 150 },
      collisions: { enable: false },
      move: { enable: true, speed: 2, outMode: "bounce" },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } }
    },
    detectRetina: true
  };

  return (
    <Particles className="absolute inset-0 z-[-1]" options={particlesOptions} />
  );
}

function CollapsibleSkill({ skill, isOpen, onClick }) {
  return (
    <div className="bg-gray-600 p-2 rounded cursor-pointer" onClick={onClick}>
      <div className="flex justify-between items-center">
        <span className="font-bold text-sm">{skill.name}</span>
        <span className="text-xs">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <p className="text-xs mt-1">{skill.description}</p>}
    </div>
  );
}

export default function Skills() {
  const [openSkill, setOpenSkill] = useState({});
  const sliderRef = useRef(null);

  const skills = {
    "💻 Front-End": [
      { name: "React", description: "A library for building UIs." },
      { name: "Tailwind CSS", description: "A utility-first CSS framework." },
      { name: "Three.js", description: "A 3D library using WebGL." },
      { name: "Canvas API", description: "Native API for drawing graphics." },
      { name: "Bootstrap", description: "A CSS framework for responsive design." }
    ],
    "⚙️ Backend": [
      { name: "Python", description: "A versatile high-level language." },
      { name: "Node.js", description: "JavaScript runtime on the server." },
      { name: "Express.js", description: "A minimal Node.js framework." },
      { name: "Django", description: "A high-level Python web framework." },
      { name: "Ruby on Rails", description: "A Ruby web application framework." },
      { name: "C#", description: "A modern object-oriented language." },
      { name: "Java", description: "A widely-used object-oriented language." },
      { name: "Kotlin", description: "A concise language for Android & JVM." },
      { name: "JavaScript", description: "The language of the web." },
      { name: "PHP", description: "A scripting language for the web." },
      { name: "Golang", description: "A statically typed language by Google." }
    ],
    "🗄️ Databases": [
      { name: "PostgreSQL", description: "An advanced relational database." },
      { name: "MySQL", description: "The world's most popular open source database." },
      { name: "SQLite", description: "A lightweight file-based database engine." },
      { name: "T-SQL", description: "SQL Server's extension for SQL." }
    ],
    "☁️ Cloud/DevOps": [
      { name: "Nginx", description: "A high-performance web server." },
      { name: "Apache", description: "A widely used web server." },
      { name: "Jenkins", description: "An automation server for CI/CD." },
      { name: "Docker", description: "A platform for containerization." },
      { name: "Kubernetes", description: "An orchestration system for containers." },
      { name: "Terraform", description: "An infrastructure-as-code tool." },
      { name: "AWS", description: "Amazon's cloud platform." },
      { name: "Azure", description: "Microsoft's cloud service." },
      { name: "Digital Ocean", description: "A cloud infrastructure provider." }
    ]
  };

  // Toggle open state for a specific category and skill index.
  const toggleSkill = (category, index) => {
    setOpenSkill(prev => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  // React Slick settings for the carousel.
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="relative py-4 text-white">
      {/* Particle background behind everything */}
      <ParticleBackground />
      <Container>
        {/* Skills Header */}
        <div className="flex justify-center mb-4">
          <div className="bg-primaryText inline-block px-4 py-2 shadow">
            <h2 className="text-3xl font-bold text-center text-primaryBg">
              Skills
            </h2>
          </div>
        </div>

        {/* Navigation Bar for Categories */}
        <div className="flex justify-center gap-4 mb-4">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => sliderRef.current.slickGoTo(index)}
              className="bg-gray-700 px-3 py-1 rounded text-primaryBg font-bold hover:bg-gray-600 transition"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel: One slide per category */}
        <div className="overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {categories.map((category) => (
              <div key={category}>
                <div className="bg-gray-700 p-4 rounded shadow w-full max-w-xl mx-auto h-[400px] overflow-y-auto">
                  <h3 className="text-xl font-bold mb-3 text-primaryBg">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {skills[category].map((skill, i) => (
                      <CollapsibleSkill
                        key={i}
                        skill={skill}
                        isOpen={openSkill[category] === i}
                        onClick={() => toggleSkill(category, i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}
