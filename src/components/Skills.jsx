import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef, useEffect } from "react";
import Container from "../components/Container";
import Slider from "react-slick";

// Custom hook to detect portrait mode (if needed for arrow styling)
function useIsPortrait() {
  const [isPortrait, setIsPortrait] = useState(
    typeof window !== "undefined" ? window.innerHeight > window.innerWidth : false
  );
  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isPortrait;
}

// Updated CollapsibleSkill component that displays the icon
function CollapsibleSkill({ skill, category, folderPaths, isOpen, onClick }) {
  const iconSrc = folderPaths[category] + skill.icon + ".svg";
  return (
    <div className="bg-gray-600 p-2 rounded cursor-pointer" onClick={onClick}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={iconSrc}
            alt={skill.name + " icon"}
            className="w-6 h-6 mr-2"
          />
          <span className="font-bold text-sm">{skill.name}</span>
        </div>
        <span className="text-xs">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <p className="text-xs mt-1">{skill.description}</p>}
    </div>
  );
}

// Custom arrow components for portrait view (optional)
function CustomPrevArrow(props) {
  const { onClick, currentSlide } = props;
  const disabled = currentSlide === 0;
  return (
    <button
      onClick={disabled ? null : onClick}
      style={{
        position: "absolute",
        left: "-35px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1000,
        background: "transparent",
        border: "none",
        fontSize: "35px",
        color: disabled ? "grey" : "black",
        cursor: disabled ? "default" : "pointer",
      }}
      disabled={disabled}
    >
      &#10094;
    </button>
  );
}

function CustomNextArrow(props) {
  const { onClick, currentSlide, slideCount } = props;
  const disabled = currentSlide === slideCount - 1;
  return (
    <button
      onClick={disabled ? null : onClick}
      style={{
        position: "absolute",
        right: "-35px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1000,
        background: "transparent",
        border: "none",
        fontSize: "35px",
        color: disabled ? "grey" : "black",
        cursor: disabled ? "default" : "pointer",
      }}
      disabled={disabled}
    >
      &#10095;
    </button>
  );
}

export default function Skills() {
  const [openSkill, setOpenSkill] = useState({});
  const sliderRef = useRef(null);
  const isPortrait = useIsPortrait();

  // Mapping of category to icon folder path
  const folderPaths = {
    "💻 Front-End": "/assets/icons/frontend/",
    "⚙️ Backend": "/assets/icons/backend/",
    "🗄️ Databases": "/assets/icons/databases/",
    "☁️ Cloud/DevOps": "/assets/icons/devops/",
  };

  // Updated skills object with dummy icon names.
  const skills = {
    "💻 Front-End": [
      { name: "React", description: "A library for building UIs.", icon: "react" },
      { name: "Tailwind CSS", description: "A utility-first CSS framework.", icon: "tailwind" },
      { name: "Three.js", description: "A 3D library using WebGL.", icon: "threejs" },
      { name: "Canvas API", description: "Native API for drawing graphics.", icon: "canvas" },
      { name: "Bootstrap", description: "A CSS framework for responsive design.", icon: "bootstrap" },
      { name: "Bulma", description: "A CSS framework for responsive design.", icon: "bulma" },
    ],
    "⚙️ Backend": [
      { name: "Python", description: "A versatile high-level language.", icon: "python" },
      { name: "Node.js", description: "JavaScript runtime on the server.", icon: "node" },
      { name: "Express.js", description: "A minimal Node.js framework.", icon: "express" },
      { name: "Django", description: "A high-level Python web framework.", icon: "django" },
      { name: "Ruby on Rails", description: "A Ruby web application framework.", icon: "rails" },
      { name: "C#", description: "A modern object-oriented language.", icon: "csharp" },
      { name: "Java", description: "A widely-used object-oriented language.", icon: "java" },
      { name: "Kotlin", description: "A concise language for Android & JVM.", icon: "kotlin" },
      { name: "JavaScript", description: "The language of the web.", icon: "javascript" },
      { name: "PHP", description: "A scripting language for the web.", icon: "php" },
      { name: "Golang", description: "A statically typed language by Google.", icon: "golang" }
    ],
    "🗄️ Databases": [
      { name: "PostgreSQL", description: "An advanced relational database.", icon: "postgresql" },
      { name: "MySQL", description: "The world's most popular open source database.", icon: "mysql" },
      { name: "SQLite", description: "A lightweight file-based database engine.", icon: "sqlite" },
    ],
    "☁️ Cloud/DevOps": [
      { name: "Nginx", description: "A high-performance web server.", icon: "nginx" },
      { name: "Apache", description: "A widely used web server.", icon: "apache" },
      { name: "Jenkins", description: "An automation server for CI/CD.", icon: "jenkins" },
      { name: "Docker", description: "A platform for containerization.", icon: "docker" },
      { name: "Kubernetes", description: "An orchestration system for containers.", icon: "kubernetes" },
      { name: "Terraform", description: "An infrastructure-as-code tool.", icon: "terraform" },
      { name: "AWS", description: "Amazon's cloud platform.", icon: "aws" },
      { name: "Azure", description: "Microsoft's cloud service.", icon: "azure" },
      { name: "Digital Ocean", description: "A cloud infrastructure provider.", icon: "digitalocean" }
    ]
  };

  const toggleSkill = (category, index) => {
    setOpenSkill((prev) => ({
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
    appendDots: (dots) => (
      <div style={{ padding: "10px 0" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    // Use custom arrows in portrait only
    ...(isPortrait && { prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow /> }),
  };

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="relative py-4 text-white">
      <Container>
        {/* Skills Header */}
        <div className="flex justify-center mb-8">
          <section className="flex flex-col justify-center items-center bg-transparent">
            <h2 className="text-4xl font-bold px-4 py-2 text-[#BFEDC1] bg-[#0D1317]/25 rounded-md shadow-md">
              Skills
            </h2>
          </section>
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
        <div className="overflow-visible">
          <Slider ref={sliderRef} {...settings}>
            {categories.map((category) => (
              <div key={category}>
                <div className="bg-gray-700 p-7 mb-4 rounded shadow w-full max-w-[617px] mx-auto h-[400px] overflow-y-auto">
                  <h3 className="text-xl font-bold mb-3 text-primaryBg">{category}</h3>
                  <div className="space-y-2">
                    {skills[category].map((skill, i) => (
                      <CollapsibleSkill
                        key={i}
                        skill={skill}
                        category={category}
                        folderPaths={folderPaths}
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
