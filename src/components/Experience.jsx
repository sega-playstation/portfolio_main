import React from "react";
import Container from "../components/Container";

export default function Experience() {
  return (
    <section id="experience" className="py-0">
      <Container>
        {/* Section Heading */}
        <div className="flex justify-center mb-8">
        <section className="flex flex-col justify-center items-center bg-transparent">
      <h2 className="text-4xl font-bold px-4 py-2 text-[#BFEDC1] bg-[#0D1317]/25 rounded-md shadow-md">
        Experience
      </h2>
    </section>
        </div>

        {/* Side-by-side cards on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-gray-700 p-6 rounded shadow text-[#f4d7c5]">
            <h3 className="text-2xl font-bold mb-1 text-primaryBg">
              Full-Stack Web Developer
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              Pointcloud LiDAR Inc. <br />
              Apr 2024 – Present
            </p>
            
            {/* Divider */}
            <p className="mb-4">--------</p>

            <ul className="list-disc list-inside space-y-3">
            <li>
                Developed a full-stack LiDAR visualization platform with secure login, user role management, and dynamic file handling using Node.js, Express, React, and PostgreSQL
              </li>
              <li>
                Engineered a custom CLI pipeline for converting LiDAR files (LAS/LAZ) using PotreeConverter and automated backend scripts
              </li>
              <li>
                Built a modular admin dashboard with advanced UX (modals, filters, assignment windows) for project and user control
              </li>
              <li>
                Managed system deployment on physical Debian servers; handled Dockerization, reverse proxy setup with NGINX, and manual Certbot SSL configuration
              </li>
              <li>
                Secured infrastructure with UFW, SSH hardening, and cleanup automation for file and disk management
              </li>
            </ul>
          </div>

          
          <div className="bg-gray-700 p-6 rounded shadow text-[#f4d7c5]">
            <h3 className="text-2xl font-bold mb-1 text-primaryBg">
              Full-Stack Web Developer
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              Red River College Polytechnic (Co-op)<br />
              Jan 2024 – Apr 2024
            </p>

            {/* Divider */}
            <p className="mb-4">--------</p>

            <ul className="list-disc list-inside space-y-3">
            <li>
              Built a Django/React-based ITSM module with role-based authentication and permission controls
            </li>
            <li>
              Managed deployment and environment configuration on DigitalOcean during testing and production phases
            </li>
            <li>
              Participated in stakeholder meetings to define business needs and translate them into functional deliverables
            </li>
            <li>
              Authored runbooks for deployment, onboarding, and team handoff
            </li>
            <li>
              Supported system rollout and addressed user access issues during live use
            </li>
            <li>
              Contributed to planning and coordination of project handoff and support transition
            </li>

            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
