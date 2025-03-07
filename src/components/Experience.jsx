import React from "react";
import Container from "../components/Container";

export default function Experience() {
  return (
    <section id="experience" className="py-0">
      <Container>
        {/* Section Heading with peach letters inside a gray box */}
        <div className="flex justify-center mb-4">
        <section className="flex flex-col justify-center items-center bg-transparent">
      <h2 className="text-4xl font-bold px-4 py-2 text-[#BFEDC1] bg-[#0D1317]/70 rounded-md shadow-md">
        Experience
      </h2>
    </section>
        </div>

        {/* Side-by-side cards on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Job 1 */}
          <div className="bg-gray-700 p-6 rounded shadow text-[#f4d7c5]">
            <h3 className="text-2xl font-bold mb-1 text-primaryBg">
              Full-Stack Web Developer
            </h3>
            <p className="mb-2">
              Pointcloud LiDAR Inc. | Feb 2023 – Feb 2025
            </p>

            {/* Divider */}
            <p className="mb-4">--------</p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Built a LiDAR scan analysis app with Node.js, Express, React, and
                Nginx.
              </li>
              <li>
                Developed secure membership features for LiDAR file management.
              </li>
              <li>
                Designed an admin dashboard for project and user account management.
              </li>
              <li>
                Configured Azure cloud servers for optimized performance.
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="bg-gray-700 p-6 rounded shadow text-[#f4d7c5]">
            <h3 className="text-2xl font-bold mb-1 text-primaryBg">
              Full-Stack Web Developer
            </h3>
            <p className="mb-2">
              Red River College Polytechnic, (Co-op) | Jan 2024 – Apr 2024
            </p>

            {/* Divider */}
            <p className="mb-4">--------</p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Led development of an ITSM website module using Django, Python, and
                React.
              </li>
              <li>
                Implemented role-based access controls for secure user permissions.
              </li>
              <li>
                Managed test and production servers on Digital Ocean.
              </li>
              <li>
                Hosted stakeholder meetings to align technical solutions with
                business needs.
              </li>
              <li>
                Authored run books for onboarding and troubleshooting.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
