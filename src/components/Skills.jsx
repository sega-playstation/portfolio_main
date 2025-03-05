import { FaLaptopCode } from 'react-icons/fa';
import Container from '../components/Container';

export default function Skills() {
  const skills = {
    "Front-End": [
      { name: "React", description: "A JavaScript library for building user interfaces." },
      { name: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development." },
      { name: "Three.js", description: "A 3D JavaScript library using WebGL." },
      { name: "Canvas API", description: "Native API for drawing and animating graphics in the browser." },
      { name: "Bootstrap", description: "A popular CSS framework for responsive design." },
    ],
    "⚙️ Backend / Programming": [
      { name: "Python", description: "A versatile high-level programming language." },
      { name: "Node.js", description: "A runtime environment for executing JavaScript on the server." },
      { name: "Express.js", description: "A minimal web framework for Node.js." },
      { name: "Django", description: "A high-level Python web framework that encourages rapid development." },
      { name: "Ruby on Rails", description: "A web application framework written in Ruby." },
      { name: "C#", description: "A modern object-oriented language from Microsoft." },
      { name: "Java", description: "A widely-used, class-based, object-oriented programming language." },
      { name: "JavaScript", description: "The language of the web for both client and server side." },
      { name: "PHP", description: "A widely-used scripting language for server-side development." },
      { name: "Golang", description: "A statically typed language designed by Google." },
    ],
    "🗄️ Databases": [
      { name: "PostgreSQL", description: "An advanced, open source relational database system." },
      { name: "MySQL", description: "The world's most popular open source database." },
      { name: "SQLite", description: "A lightweight, file-based SQL database engine." },
      { name: "T-SQL", description: "SQL Server's extension for SQL." },
    ],
    "☁️ Cloud & DevOps": [
      { name: "Nginx", description: "A high performance web server and reverse proxy." },
      { name: "Apache", description: "One of the most widely used web servers." },
      { name: "Jenkins", description: "An open-source automation server for CI/CD." },
      { name: "Docker", description: "A platform for containerizing applications." },
      { name: "Kubernetes", description: "An orchestration system for Docker containers." },
      { name: "Terraform", description: "An infrastructure-as-code tool for building, changing, and versioning infrastructure." },
      { name: "AWS", description: "Amazon Web Services cloud platform." },
      { name: "Azure", description: "Microsoft's cloud computing service." },
      { name: "Digital Ocean", description: "A cloud infrastructure provider geared toward developers." },
    ],
  };

  return (
    <section id="skills" className="py-0 text-white">
      <Container>
        {/* "Skills" header wrapped in a matching gray box with peach letters and sharp corners */}
        <div className="flex justify-center mb-8">
          <div className="bg-primaryText inline-block px-4 py-2 shadow">
            <h2 className="text-3xl font-bold text-center text-primaryBg">
              Skills
            </h2>
          </div>
        </div>

        {/* Title section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-primaryText">
            Full-Stack Development
          </h3>
          <p className="text-lg mt-2 text-primaryText">
            Front-End / Backend / Databases / Cloud &amp; DevOps
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {Object.keys(skills).map((category, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded shadow">
              <h3 className="text-2xl font-bold mb-4 text-primaryBg">
                {category === "Front-End" && (
                  <FaLaptopCode className="inline mr-2" />
                )}
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills[category].map((skill, i) => (
                  <div key={i} className="relative group">
                    <span className="bg-gray-600 px-3 py-2 rounded cursor-pointer">
                      {skill.name}
                    </span>
                    {/* Tooltip on hover with max-width */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-sm p-2 rounded shadow whitespace-nowrap z-10 max-w-[90vw]">
                      {skill.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
