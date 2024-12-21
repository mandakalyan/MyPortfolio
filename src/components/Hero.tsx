import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Full Stack Developer & DevOps Engineer
            </h1>
            <p className="text-xl text-gray-600">
              Specializing in Spring Boot microservices, React, and DevOps practices.
              Building scalable solutions with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=600"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;