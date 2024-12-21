import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            DevOps<span className="text-blue-600">Pro</span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600">
              <Mail size={20} />
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;