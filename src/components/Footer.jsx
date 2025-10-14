import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitterSquare, FaHeart } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#191919] text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#191919] via-[#1a1a2e] to-[#16213e] opacity-80"></div>
      
      {/* Animated Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 items-center transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Logo and Name Section */}
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="relative group">
                <img 
                  src={Logo} 
                  alt="Logo" 
                  className="h-16 w-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-2" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Bablu Kumar
                </h3>
                <p className="text-gray-400 text-sm mt-1">MERN Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide">Quick Links</h4>
            <div className="flex flex-col items-center space-y-3">
              <button 
                onClick={() => {
                  const event = new CustomEvent('openAboutModal');
                  window.dispatchEvent(event);
                }}
                className="w-fit px-3 py-1 text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 transform cursor-pointer"
              >
                About Me
              </button>
              <button 
                onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-fit px-3 py-1 text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm hover:translate-x-1 transform cursor-pointer"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-fit px-3 py-1 text-gray-400 hover:text-pink-400 transition-all duration-300 text-sm hover:translate-x-1 transform cursor-pointer"
              >
                Contact
              </button>
              <button 
                onClick={() => {
                  const resumeUrl = '/bablukumar_069.pdf';
                  const link = document.createElement('a');
                  link.href = resumeUrl;
                  link.download = 'Bablu_Kumar_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-fit px-3 py-1 text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 transform cursor-pointer"
              >
                Resume
              </button>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-6 text-white">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {[
                { icon: FaLinkedin, href: "#", color: "hover:text-blue-400", bgColor: "hover:bg-blue-500/20", delay: 0 },
                { icon: FaGithub, href: "#", color: "hover:text-gray-400", bgColor: "hover:bg-gray-500/20", delay: 100 },
                { icon: FaInstagram, href: "#", color: "hover:text-pink-500", bgColor: "hover:bg-pink-500/20", delay: 200 },
                { icon: FaTwitterSquare, href: "#", color: "hover:text-blue-400", bgColor: "hover:bg-blue-500/20", delay: 300 }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`group relative p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-white ${social.color} ${social.bgColor} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg`}
                  style={{ transitionDelay: `${social.delay}ms` }}
                >
                  <social.icon size={20} />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-10 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`}></div>

        {/* Bottom Section */}
        <div className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-blue-400 font-medium">Bablu Kumar</span>. All rights reserved.
            </p>
          </div>

          {/* Made with Love */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" size={14} />
            <span>in India</span>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              <a 
                href="mailto:bablukumar27489@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                bablukumar27489@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
    </footer>
  );
};

export default Footer;
