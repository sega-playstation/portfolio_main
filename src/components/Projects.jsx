import React from "react";
import Container from "../components/Container";

export default function Projects() {
  const projects = [
    {
      title: "LiDAR Scan Analysis App",
      year: "2023",
      description:
        "A web app for analyzing LiDAR scans, built with Node.js, Express, React, and Nginx. Features include secure file upload, visualization, and admin dashboards.",
      image: "/lidar_project.png",
      link: "https://yourprojectlink.com",
      tech: ["React", "Node.js", "Express", "Nginx", "Azure"],
    },
    {
      title: "MusicMatch (Coming Soon)",
      year: "2024",
      description:
        "A platform for discovering new music through intelligent recommendations and social sharing. Built with Next.js, Tailwind, and Spotify API integration.",
      image: "/coming_soon.png",
      link: "#",
      tech: ["GoLang", "React", "React Native", "Tailwind", "Spotify API", "Apple Music API", "Tidal API", ],
    },
  ];

  return (
    <section id="projects" className="py-0">
      <Container>
        {/* Section Heading with peach letters inside a gray box */}
        <div className="flex justify-center mb-8">
        <section className="flex flex-col justify-center items-center bg-transparent">
      <h2 className="text-4xl font-bold px-4 py-2 text-[#BFEDC1] bg-[#0D1317]/70 rounded-md shadow-md">
        Projects
      </h2>
    </section>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded shadow text-[#FAC9B8]"
            >
              {/* Title with peach color */}  
              <h3 className="text-2xl font-bold mb-1 text-primaryBg">
                {project.title}
              </h3>

              {/* Year */}
              {project.year && <p className="mb-2">{project.year}</p>}

              {/* Description */}
              {project.description && (
                <p className="mb-4">{project.description}</p>
              )}

              {/* Divider */}
              <p className="mb-4">--------</p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-600 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <p className="mb-4">--------</p>

              {/* Project Link (only if not "#") */}
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {project.link.replace(/^https?:\/\//, "")}
                </a>
              )}

              {/* Project Image */}
              <div className="mt-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
