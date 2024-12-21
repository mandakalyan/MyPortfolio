import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <p className="text-gray-600">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out if you'd like to collaborate or just want to say hello!
              </p>
              <div className="space-y-4">
                <a href="mailto:kalyanreddy.manda@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Mail className="mr-3" size={20} />
                  kalyanreddy.manda@gmail.com                </a>
                <a href="https://www.linkedin.com/in/manda-kalyan-reddy-521029221" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Linkedin className="mr-3" size={20} />
                  LinkedIn Profile
                </a>
                <a href="https://github.com/mandakalyan" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Github className="mr-3" size={20} />
                  GitHub Profile
                </a>
                <div className="flex items-center text-gray-600">
                  <MapPin className="mr-3" size={20} />
                  Available Worldwide
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="KALYAN REDDY MANDA"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="kalyanreddy.manda@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;