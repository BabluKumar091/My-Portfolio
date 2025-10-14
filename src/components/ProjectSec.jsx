import React, { useState, useEffect } from 'react';
import WonderHub from "../assets/WonderHub.png"
import CountryInfo from "../assets/CountryInfo.png"
import Kiran from "../assets/Kiran.png"
import Pushpak from '../assets/Pushpak.png'

const ProjectSec = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "WonderHub",
      desc: "WanderHub is a full-stack hotel listing application built with Node.js, Express.js, EJS, and MongoDB. It features RESTful APIs for hotel management, middleware for request handling, and dynamic EJS views for real-time data rendering. Designed for scalability and responsiveness, providing users with an efficient browsing experience.",
      link: "https://github.com/BabluKumar091",
      img: WonderHub,
      tech: ["Node.js", "Express.js", "MongoDB", "EJS"]
    },
    {
      title: "CountryInfoSearch",
      desc: "Country Info Search is a React-based web application that allows users to search for any country and view detailed information, including its flag, borders, population, region, and more. It features a clean responsive design, dark/light mode, and interactive UI for an engaging user experience.",
      link: "https://github.com/BabluKumar091",
      img: CountryInfo,
      tech: ["React", "JavaScript", "CSS", "API"]
    },
    {
      title: "Kirandermatology",
      desc: "Developed a real-world client project using WordPress, delivering a responsive and user-friendly website. Customized themes, integrated plugins, and optimized performance to meet client requirements. Focused on creating a professional design with easy content management, ensuring smooth functionality and enhancing the client's digital presence.",
      link: "https://kirandermatology.com/",
      img: Kiran,
      tech: ["WordPress", "CSS"]
    },
    {
      title: "Pushpak",
      desc: "Built a real client project using WordPress, delivering a fully responsive and functional website. Customized themes, configured plugins, and ensured SEO-friendly performance. Focused on user-friendly design and smooth navigation to meet client needs and enhance their online presence effectively.",
      link: "https://antiquewhite-beaver-695632.hostingersite.com/",
      img: Pushpak,
      tech: ["WordPress", "CSS"]
    }
  ];

  return (
    <section className="w-full bg-[#191919] text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#191919] via-[#1a1a2e] to-[#16213e] opacity-80"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header with Animation */}
        <div className={`text-center transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Latest Projects
          </h2>
          <p className="text-center text-gray-300 mt-2 text-lg">
            Recent work showcasing design and development
          </p>
        </div>

        <div className="relative mt-16">
          {/* Animated Timeline Line */}
          <div className={`absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-blue-400 via-purple-500 to-pink-400 -translate-x-1/2 transition-all duration-1000 ease-out ${
            isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}></div>

          <div className="space-y-20">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`flex items-center md:gap-12 gap-8 transition-all duration-1000 ease-out ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Project Image with Light Effects */}
                <div className="flex-1 flex justify-center">
                  <div 
                    className={`relative group cursor-pointer transition-all duration-500 ease-out transform hover:scale-105 ${
                      hoveredProject === i ? 'scale-105' : 'scale-100'
                    }`}
                    onMouseEnter={() => setHoveredProject(i)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Light Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-400/20 rounded-2xl blur-2xl transition-all duration-500 ${
                      hoveredProject === i ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
                    }`}></div>
                    
                    {/* Project Card */}
                    <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white w-[380px] transition-all duration-500">
                      {/* Browser Header */}
                      <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-8 flex items-center px-4 gap-2 border-b border-gray-200">
                        <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></span>
                      </div>
                      
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={p.img} 
                          alt={p.title} 
                          className="w-full h-64 object-cover transition-all duration-700 ease-out group-hover:scale-110" 
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content with Animation */}
                <div className={`flex-1 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl ${
                  hoveredProject === i ? 'shadow-2xl scale-105' : 'shadow-lg scale-100'
                }`}>
                  {/* Project Title with Gradient */}
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#2765F5] to-[#4f46e5] bg-clip-text text-transparent mb-4">
                    {p.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium rounded-full border border-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button with Light Effect */}
                  <a
                    href={p.link}
                    className="group relative inline-block mt-4 text-lg text-white bg-gradient-to-r from-[#2765F5] to-[#4f46e5] px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  >
                    <span className="relative z-10">View Project</span>
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSec;