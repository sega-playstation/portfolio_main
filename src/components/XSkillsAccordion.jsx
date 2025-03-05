import { useState } from "react";

const skillsData = [
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      },
      {
        name: "Express.js",
        description: "A minimal and flexible Node.js web application framework.",
      },
      {
        name: "Django",
        description: "A high-level Python web framework that encourages rapid development.",
      },
      {
        name: "Ruby on Rails",
        description: "A web application framework written in Ruby under the MIT license.",
      },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        description: "A dynamic programming language used for web development.",
      },
      {
        name: "Python",
        description: "A programming language known for its readability and versatility.",
      },
      {
        name: "Golang",
        description: "A statically typed, compiled programming language designed by Google.",
      },
      {
        name: "C#",
        description: "A modern, object-oriented programming language developed by Microsoft.",
      },
      {
        name: "Java",
        description: "A high-level, class-based, object-oriented programming language.",
      },
      {
        name: "Kotlin",
        description: "A modern programming language that runs on the JVM.",
      },
      {
        name: "PHP",
        description: "A popular scripting language especially suited to web development.",
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        description: "A powerful, open-source relational database system.",
      },
      {
        name: "MySQL",
        description: "An open-source relational database management system.",
      },
      {
        name: "SQLite",
        description: "A self-contained, serverless, zero-configuration SQL database engine.",
      },
      {
        name: "T-SQL",
        description: "Transact-SQL, Microsoft's proprietary extension of SQL.",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", description: "Amazon Web Services, a cloud computing platform." },
      { name: "Azure", description: "Microsoft's cloud platform with a wide range of services." },
      { name: "Digital Ocean", description: "A cloud provider offering virtual private servers." },
      { name: "Nginx", description: "A web server that also functions as a reverse proxy and load balancer." },
      { name: "Apache", description: "A popular open-source web server software." },
      { name: "Jenkins", description: "An open-source automation server for continuous integration." },
      { name: "Docker", description: "A platform to develop, ship, and run apps in containers." },
      {
        name: "Kubernetes",
        description: "A container orchestration system for automating application deployment.",
      },
      { name: "Terraform", description: "An open-source infrastructure-as-code software tool." },
    ],
  },
];

export default function SkillsAccordion() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleCategory = (category) => {
    // If we click the same category again, close it
    setActiveCategory(activeCategory === category ? null : category);
    // Reset the active skill whenever we select a different category
    setActiveSkill(null);
  };

  const toggleSkill = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  return (
    <div className="p-8 bg-gray-900 text-white">
      {/* Root categories in a horizontal row */}
      <div className="flex space-x-6 overflow-x-auto">
        {skillsData.map((categoryData, index) => (
          <div key={index} className="flex flex-col w-60">
            {/* Category Card */}
            <div
              onClick={() => toggleCategory(categoryData.category)}
              className="bg-indigo-600 text-white p-6 rounded-xl cursor-pointer text-xl font-bold text-center hover:bg-indigo-700 transition-all"
            >
              {categoryData.category}
            </div>

            {/* Skills row (opens left-to-right) */}
            {activeCategory === categoryData.category && (
              <div className="flex space-x-4 mt-4 overflow-x-auto">
                {categoryData.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    {/* Skill Card */}
                    <div
                      onClick={() => toggleSkill(skill.name)}
                      className="bg-indigo-700 p-6 rounded-xl shadow-lg hover:bg-indigo-600 transition-all cursor-pointer w-40 text-center text-lg font-semibold"
                    >
                      {skill.name}
                    </div>

                    {/* Expand skill description */}
                    {activeSkill === skill.name && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-indigo-800 p-4 mt-2 rounded-lg text-sm text-gray-300 w-48 text-center">
                        {skill.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
