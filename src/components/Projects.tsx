import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices",
      description: "A scalable e-commerce platform built with Spring Boot microservices architecture, featuring service discovery, API gateway, and event-driven communication.",
      tech: ["Spring Boot", "Spring Cloud", "Docker", "Kubernetes", "PostgreSQL", "RabbitMQ"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "DevOps Pipeline Automation",
      description: "Automated CI/CD pipeline implementation using Jenkins, Docker, and Kubernetes for microservices deployment with monitoring and logging.",
      tech: ["Jenkins", "Docker", "Kubernetes", "Prometheus", "Grafana", "ELK Stack"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Cloud-Native Dashboard",
      description: "React-based admin dashboard for cloud resource management with real-time monitoring and cost optimization features.",
      tech: ["React", "TypeScript", "Tailwind CSS", "AWS SDK", "Chart.js", "Redux"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="inline-flex items-center text-gray-600 hover:text-blue-600">
                    <Github size={20} className="mr-2" /> Code
                  </a>
                  <a href="#" className="inline-flex items-center text-gray-600 hover:text-blue-600">
                    <ExternalLink size={20} className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;