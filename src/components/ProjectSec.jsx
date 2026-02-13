import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Wonderhub from "../assets/Wonderhub.png";
import CountryInfo from "../assets/CountryInfo.png";
import Kiran from "../assets/Kiran.png";
import alumni from '../assets/alumni.png';

const projects = [
  {
    title: "Alumani Data Management System",
    desc: "A comprehensive data management system for alumni, featuring secure login, data storage, and easy access to alumni information.",
    link: "https://alumni-123.netlify.app/",
    img: alumni,
    tech: ["React", "JWT", "Node.js", "MongoDB"],
    category: "Full Stack"
  },
  {
    title: "WonderHub",
    desc: "Full-stack hotel listing application with RESTful APIs, hotel management, and dynamic views for real-time data rendering.",
    link: "https://github.com/BabluKumar091",
    img: Wonderhub,
    tech: ["Node.js", "Express.js", "MongoDB", "EJS"],
    category: "Full Stack"
  },
  {
    title: "CountryInfoSearch",
    desc: "React-based app to search countries and view details like flags, borders, and population with dark/light mode.",
    link: "https://github.com/BabluKumar091",
    img: CountryInfo,
    tech: ["React", "API", "Tailwind"],
    category: "Frontend"
  },
  {
    title: "Kirandermatology",
    desc: "Real-world client project. Responsive WordPress site with customized themes and plugins for a dermatology clinic.",
    link: "https://kirandermatology.com/",
    img: Kiran,
    tech: ["WordPress", "CSS", "SEO"],
    category: "Client Work"
  },

];

const ProjectSec = () => {
  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden" id="projects-section">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent development work, ranging from full-stack applications to real-world client projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60 z-10" />
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-20 -mt-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
                    >
                      <ExternalLink size={20} className="text-gray-300" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSec;