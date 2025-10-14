import React, { useState, useEffect } from 'react'
// import { X } from 'lucide-react';    // removed
import Pic from "../assets/My_Pic.png";

const About = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div 
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center transition-all duration-300 ease-out z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}  
    >
      <div 
        className={`bg-[#191919] text-white rounded-2xl shadow-2xl w-[80%] max-w-4xl p-8 flex flex-col md:flex-row gap-8 relative transition-all duration-500 ease-out ${
          isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-10 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10"></div>
        
        <button 
          className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
          onClick={handleClose} 
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex-1 flex flex-col justify-center">
          <h2 className={`text-3xl text-[#2765F5] font-bold mb-4 transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            About Me
          </h2>
          
          <p className={`text-gray-300 leading-relaxed mb-6 transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            Hi, I'm Bablu Kumar, a Full Stack Developer (MERN). I love building modern, responsive and user-friendly web apps. My skills include React, Node.js, Express and MongoDB. I focus on clean design and performance. Always motivated to learn and create better solutions.
          </p>

          <div className={`flex flex-wrap gap-3 transition-all duration-700 ease-out delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {[
              "HTML", "CSS", "Tailwind", "Bootstrap", 
              "WordPress", "React", "Node.js", "Express.js", "MongoDB"
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gradient-to-r from-[#2765F5] to-[#4f46e5] text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={`flex-1 flex justify-center items-center transition-all duration-700 ease-out delay-500 ${
          isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-10 opacity-0 scale-95'
        }`}>
          <div className="relative group">
            <img 
              src={Pic} 
              alt="About"
              className="rounded-xl shadow-lg w-full h-auto object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-2xl" 
            />
            {/* Image glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;