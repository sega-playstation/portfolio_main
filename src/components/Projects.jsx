import React from "react";
import Container from "../components/Container";
import ProjectPreview from "../components/ProjectPreview";

export default function Projects() {
  const projects = [
    {
      title: "LiDAR Data Visualization and Conversion Platform",
      year: "2024–2025",
      description:
        "\n\nA full-stack web application for uploading, converting, and visualizing LiDAR scans in-browser. Includes secure user authentication, admin dashboard, file conversion pipeline using PotreeConverter CLI, and live 3D rendering via Potree viewer. Built with Node.js, Express, React, PostgreSQL, and NGINX.\n\nRuns on business hardware with NGINX reverse proxy and HTTPS managed via Tailscale.",
      images: [
        "/assets/projects/img1_a.png",
        "/assets/projects/img3_a.png",
        "/assets/projects/img4_a.png",
        "/assets/projects/img5_a.png",
        "/assets/projects/img6_a.png",
        "/assets/projects/img7_a.png",
        "/assets/projects/img8_a.png",
        "/assets/projects/img9_a.png",
      ],
      link: "https://personaluse.online",
      tech: ["React", "Node.js", "Express", "Nginx"],
    },
    {
      title: "MusicMatch (Coming Soon)",
      year: "2025",
      description:
        "\n\nAn app for discovering new music through intelligent recommendations and social sharing between different music streaming platforms. Built with Go, Tailwind, and streaming site API integration.",
      images: ["/assets/projects/music1.webp"],
      link: "Coming Soon",
      tech: ["Go", "React", "React Native", "Tailwind", "Spotify API", "Apple Music API", "Tidal API"],
    },
  ];

  return (
    <section id="projects" className="py-0">
      <Container>
        <div className="flex justify-center mb-8">
          <section className="flex flex-col justify-center items-center bg-transparent">
            <h2 className="text-4xl font-bold px-4 py-2 text-[#BFEDC1] bg-[#0D1317]/25 rounded-md shadow-md">
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
              <h3 className="text-2xl font-bold mb-1 text-primaryBg">
                {project.title}
              </h3>

              {project.year && <p className="mb-2">{project.year}</p>}

              {project.description && (
                <div className="mb-4 whitespace-pre-line">
                  {project.description}
                </div>
              )}

              {/* Flex layout: image + right-aligned link, tech stack below */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-4">
                
                {/* Left Column: Tech Stack */}
                <div className="flex-1">
                  <hr className="mb-3 mt-8 border-gray-500" />
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-600 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <hr className="mt-3 border-gray-500" />
                </div>

                {/* Right Column: Link + Image */}
                <div className="flex-shrink-0 w-full lg:w-[450px] flex flex-col items-start lg:items-end">
                  {/* Show link or 'Coming Soon' as plain text */}
                  {project.link === "Coming Soon" ? (
                    <span className="text-purple-400 italic mb-2">Coming Soon</span>
                  ) : project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-purple-400 mb-2"
                    >
                      {project.link.replace(/^https?:\/\//, "")}
                    </a>
                  ) : null}

                  <ProjectPreview images={project.images} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
