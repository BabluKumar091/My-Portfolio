import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Pic from "../assets/My_Pic.png";

const About = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    document.body.style.overflow = 'unset';
    setTimeout(onClose, 400);
  };

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const skills = [
    "HTML", "CSS", "Bootstrap", "React", "Node.js", "Express.js", "MongoDB",
    "Tailwind", "JavaScript", "java", "REST API", "JWT", "Git", "Wordpress", "Postman",
  ];

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-all duration-400 ease-out z-50 p-4 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      style={{
        backdropFilter: isVisible ? 'blur(12px)' : 'blur(0px)',
        backgroundColor: isVisible ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,0)',
      }}
      onClick={handleClose}
    >
      {/* Main Modal - Fixed overflow issue */}
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{
          scale: isVisible ? 1 : 0.9,
          y: isVisible ? 0 : 30,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          duration: 0.5
        }}
        className="bg-[#0A0A0F] text-white rounded-3xl shadow-[0_20px_70px_-15px_rgba(37,99,235,0.3)] w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Content container with padding */}
        <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">

          {/* Premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] rounded-3xl"></div>

          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-gradient">
            <div className="absolute inset-0 bg-[#0A0A0F] rounded-3xl"></div>
          </div>

          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent rounded-3xl"></div>

          {/* Close Button - Fixed positioning */}
          <button
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-90 group"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-300 group-hover:rotate-90"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center relative z-10">
            {/* Decorative line */}
            <div className="absolute left-0 top-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

            <motion.h2
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 mt-4 md:mt-0"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>

            <motion.p
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-300 leading-relaxed mb-6 text-base"
            >
              I'm a <span className="text-blue-400 font-semibold">MERN Stack Developer</span> who transforms complex problems into elegant, responsive solutions. I focus on performance, clean design, and creating exceptional user experiences.
            </motion.p>

            {/* Skills Section - Short & Compact */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-2"
            >
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.05) }}
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="relative px-3 py-1.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-white text-xs font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105 hover:border-blue-500/40 overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10">{skill}</span>
                    {hoveredSkill === skill && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></span>
                    )}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats - Optional small addition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mt-4 text-xs text-gray-400"
            >
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Available for work
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
            className="flex-1 flex justify-center items-center relative z-10"
          >
            <div className="relative group cursor-pointer">
              {/* Animated rings */}
              <div className="absolute inset-[-15px] rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl group-hover:blur-[40px] transition-all duration-700"></div>

              {/* Image container - Fixed size */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-2 border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={Pic}
                  alt="Bablu Kumar"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Image caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium">Bablu Kumar</p>
                  <p className="text-blue-300 text-xs">MERN Stack Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59,130,246,0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59,130,246,0.8);
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default About;