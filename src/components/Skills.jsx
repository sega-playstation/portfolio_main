import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef, useEffect } from "react";
import Container from "../components/Container";
import Slider from "react-slick";

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
          <span className="font-bold text-sm" title={skill.boilerplate || ""}>
            {skill.name}
          </span>
        </div>
        <span className="text-xs">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="text-xs mt-1">
          <p>{skill.description}</p>
          {skill.boilerplate && (
            <p className="italic text-gray-300 mt-1">{skill.boilerplate}</p>
          )}
        </div>
      )}
    </div>
  );
}

function CustomPrevArrow({ onClick, currentSlide }) {
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

function CustomNextArrow({ onClick, currentSlide, slideCount }) {
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
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef(null);
  const isPortrait = useIsPortrait();

  const folderPaths = {
    "💻 Front-End": "/assets/icons/frontend/",
    "⚙️ Backend": "/assets/icons/backend/",
    "🗄️ Databases": "/assets/icons/databases/",
    "☁️ Cloud/DevOps": "/assets/icons/devops/",
  };

  const toggleSkill = (category, index) => {
    setOpenSkill((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  const skills = {
    "💻 Front-End": [
      {
        name: "Bootstrap",
        description: "Used in college projects for rapid responsive layout and component prototyping.",
        boilerplate: "A CSS framework for responsive design.",
        icon: "bootstrap"
      },
      {
        name: "Bulma",
        description: "Used with Ruby on Rails to style a multi-page ecommerce storefront with clean, modular layout components.",
        boilerplate: "A modern CSS framework based on Flexbox.",
        icon: "bulma"
      },
      {
        name: "Canvas API",
        description: "Used to create interactive sidebar animations and custom visual effects on this site; comfortable with animation loops, canvas transforms, and dynamic rendering.",
        boilerplate: "Native API for rendering graphics with JavaScript.",
        icon: "canvas"
      },
      {
        name: "React",
        description: "Used to build dynamic user interfaces, dashboards, and modals in multiple projects including a LiDAR scan management platform and an ITSM tool.",
        boilerplate: "A JavaScript library for building UIs.",
        icon: "react"
      },
      {
        name: "Tailwind CSS",
        description: "Used in the LiDAR app and this portfolio site to rapidly style components with a utility-first approach, including layout, spacing, and responsive design.",
        boilerplate: "A utility-first CSS framework.",
        icon: "tailwind"
      },
      {
        name: "Three.js",
        description: "Used through Potree for 3D point cloud rendering; familiar with its role in WebGL-based visualization workflows.",
        boilerplate: "A 3D graphics library built on WebGL.",
        icon: "threejs"
      },
    ],
    "⚙️ Backend": [
      {
        name: "C#",
        description: "Used in college for object-oriented programming projects including Windows Forms apps and backend logic exercises.",
        boilerplate: "A modern object-oriented programming language by Microsoft.",
        icon: "csharp"
      },
      {
        name: "Django",
        description: "Used for backend development in a deployed ITSM platform; handled user roles, permissions, and database interactions.",
        boilerplate: "A high-level Python web framework.",
        icon: "django"
      },
      {
        name: "Express.js",
        description: "Used to build backend APIs for user authentication, role-based access control, and admin dashboard features.",
        boilerplate: "A minimal Node.js framework.",
        icon: "express"
      },
      {
        name: "Java",
        description: "Used in foundational coursework for object-oriented design and basic algorithms; familiar with syntax and core principles.",
        boilerplate: "A widely-used object-oriented language.",
        icon: "java"
      },
      {
        name: "JavaScript",
        description: "Core language across all web projects; used for frontend logic, backend services (Node.js), and dynamic UI features.",
        boilerplate: "The language of the web.",
        icon: "javascript"
      },
      {
        name: "Node.js",
        description: "Used as the backend runtime for a full-stack LiDAR processing app; handled file I/O, CLI integration, and custom API routes.",
        boilerplate: "A JavaScript runtime for building scalable network apps.",
        icon: "node"
      },
      {
        name: "PHP",
        description: "Used for web development of the first version of a LiDAR viewer site; experience with basic routing and server-side scripting.",
        boilerplate: "A general-purpose scripting language for web development.",
        icon: "php"
      },
      {
        name: "Python",
        description: "Used in Django web development and for microcontroller programming in IoT projects; familiar with scripting, REST APIs, and automation workflows.",
        boilerplate: "A versatile high-level language.",
        icon: "python"
      },
      {
        name: "Ruby on Rails",
        description: "Built an ecommerce site and a custom Google Maps-based travel marker app; used MVC structure and form-driven data models.",
        boilerplate: "A Ruby framework for rapid web app development.",
        icon: "rails"
      },
    ],
    "🗄️ Databases": [
      {
        name: "MySQL",
        description: "Used in college web projects for basic relational data handling; familiar with SQL syntax and PHP integration.",
        boilerplate: "The world's most popular open source database.",
        icon: "mysql"
      },
      {
        name: "PostgreSQL",
        description: "Primary database for multi-user apps including the LiDAR viewer platform; used for relational schema design, migrations, and permission logic.",
        boilerplate: "An advanced open source relational database.",
        icon: "postgresql"
      },
      {
        name: "SQLite",
        description: "Used in Ruby on Rails projects for lightweight persistence, schema migrations, and data modeling during development.",
        boilerplate: "A lightweight, file-based SQL database engine.",
        icon: "sqlite"
      },
    ],
    "☁️ Cloud/DevOps": [
      {
        name: "Apache",
        description: "Used in early PHP-based web projects for local testing and basic server configuration.",
        boilerplate: "A widely used open-source web server.",
        icon: "apache"
      },
      {
        name: "Azure",
        description: "Used to host the first version of a PHP-based LiDAR viewer site with virtual machine provisioning and basic DNS management.",
        boilerplate: "Microsoft's cloud computing platform.",
        icon: "azure"
      },
      {
        name: "Digital Ocean",
        description: "Used for cloud deployment and staging of the Django/React ITSM platform; handled setup and environment config.",
        boilerplate: "A developer-friendly cloud provider.",
        icon: "digitalocean"
      },
      {
        name: "Docker",
        description: "Used to containerize full-stack projects including the LiDAR platform; experience with Dockerfiles, Compose, and deployment flow.",
        boilerplate: "A platform for containerization.",
        icon: "docker"
      },
      {
        name: "Jenkins",
        description: "Provisioned Jenkins and maintained CI/CD pipelines on business-owned infrastructure for the LiDAR platform.",
        boilerplate: "An open-source automation server.",
        icon: "jenkins"
      },
      {
        name: "Nginx",
        description: "Used in LiDAR and ITSM projects for reverse proxying, SSL routing, and serving static files in production.",
        boilerplate: "A high-performance HTTP server and reverse proxy.",
        icon: "nginx"
      },
      {
        name: "AWS",
        description: "Used to host an MQTT server and basic VPS provisioning during IoT project development.",
        boilerplate: "Amazon's cloud platform for infrastructure and services.",
        icon: "aws"
      },
    ]
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveTab(next),
    ...(isPortrait && {
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    }),
  };

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="relative py-4 text-white">
      <Container>
        <div className="flex justify-center mb-8">
          <section className="flex flex-col justify-center items-center bg-transparent">
            <h2 className="text-4xl font-bold px-4 py-2 text-[#BFEDC1] bg-[#0D1317]/25 rounded-md shadow-md">
              Skills
            </h2>
          </section>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => {
                sliderRef.current.slickGoTo(index);
                setActiveTab(index);
              }}
              className={`px-3 py-1 rounded font-bold transition ${
                activeTab === index
                  ? "bg-gray-700 text-white"
                  : "bg-gray-800 text-primaryBg hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

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
