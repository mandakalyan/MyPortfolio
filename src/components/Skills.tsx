import React from 'react';
import { Server, Code, GitBranch, Cloud } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Backend Development",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      items: ["Spring Boot", "Microservices", "RESTful APIs", "Java", "Maven", "JPA/Hibernate"]
    },
    {
      category: "Frontend Development",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      items: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "DevOps",
      icon: <GitBranch className="w-8 h-8 text-blue-600" />,
      items: ["CI/CD", "Jenkins", "Docker", "Kubernetes", "Git", "GitHub Actions"]
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      items: ["AWS", "Azure", "Terraform", "Linux", "Nginx", "MongoDB"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-3">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;