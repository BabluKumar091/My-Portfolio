import { useState, useEffect } from 'react';
import Logo from './assets/Logo.png';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import About from './components/About.jsx';
import ProjectSec from './components/ProjectSec.jsx';
import Client from './components/Client.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CursorEffect from './CursorEffect.jsx';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Page load animation
  useEffect(() => {
    setIsLoaded(true);
    // Add small delay before showing elements
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  // Listen for About modal open event from Footer
  useEffect(() => {
    const handleAboutOpen = (e) => {
      setShowAbout(true);
    };
    window.addEventListener('openAboutModal', handleAboutOpen);
    return () => window.removeEventListener('openAboutModal', handleAboutOpen);
  }, []);

  // Resume download function
  const handleResumeDownload = () => {
    const resumeUrl = '/bablukumar_069.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Bablu_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='bg-[#191919]'> {/* ✅ min-h-screen हटा दिया */}

      {/* Animated Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#191919] via-[#1a1a2e] to-[#16213e] opacity-80"></div>
      <div className="fixed inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Navigation */}
      <nav className={`relative z-10 shadow-sm py-3 px-8 transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={Logo} 
                alt="logo" 
                className={`h-16 w-auto transition-all duration-1000 ease-out ${
                  isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
                }`}
              />
            </div>

            {/* Resume Download Button */}
            <div className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button
                onClick={handleResumeDownload}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 
                         text-white px-5 py-2 rounded-full transition-all duration-500 ease-out transform hover:scale-105 
                         hover:shadow-2xl flex items-center gap-3 overflow-hidden border border-blue-500/30 cursor-pointer text-sm md:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <FaDownload className="relative z-10 text-lg group-hover:animate-bounce" />
                <span className="relative z-10 font-medium">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 max-w-7xl mx-auto gap-0 relative z-10 py-20">
        {/* Left Content */}
        <div className={`text-white ml-0 md:ml-16 mb-8 md:mb-0 md:w-1/2 md:mr-[10px] transition-all duration-1000 ease-out flex flex-col justify-center ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}>
          <h2 className={`text-2xl md:text-4xl font-bold mb-2 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r text-4xl from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Bablu Kumar
            </span>
          </h2>
          
          <p className={`italic text-sm md:text-md mt-4 text-white mb-6 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 text-xl">
              MERN Stack Developer
            </span>
          </p>
          
          <button 
  className={`cursor-pointer group bg-gradient-to-r from-blue-600 to-purple-700 
              hover:from-blue-700 hover:to-purple-800 text-white 
              px-4 py-3 md:px-8 md:py-3 rounded-2xl 
              transition-all duration-500 ease-out delay-300 
              transform hover:scale-105 hover:shadow-2xl
              flex items-center justify-center gap-2 relative overflow-hidden 
              text-sm md:text-base font-medium tracking-wide
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
  onClick={() => setShowAbout(true)}
>
  <span className="relative z-10 text-md">About me</span>
  <svg xmlns="http://www.w3.org/2000/svg" 
       className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
       fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  -translate-x-full group-hover:translate-x-full 
                  transition-transform duration-700"></div>
</button>

        </div>

        {/* Center Image */}
        <div className={`mb-8 md:mb-0 md:w-1/1 flex ml-0 transition-all duration-1000 ease-out delay-500 flex items-center justify-center ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'
        }`}>
          <div className="relative group">
            <img 
              src={Logo} 
              alt="Profile" 
              className="h-64 md:h-80 w-auto object-contain transition-all duration-700 ease-out hover:scale-105 hover:rotate-2" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10 group-hover:blur-2xl transition-all duration-700"></div>
          </div>
        </div>

        {/* Social Icons */}
        <div className={`md:w-1/6 flex md:flex-col justify-center space-x-4 md:space-x-0 md:space-y-4 md:mr-[50px] transition-all duration-1000 ease-out delay-600 flex items-center ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}>
          {[
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/bablu-kumar92/", color: "hover:text-blue-400", delay: 0 },
            { icon: FaGithub, href: "https://github.com/BabluKumar091", color: "hover:text-gray-400", delay: 100 },
            { icon: FaInstagram, href: "#", color: "hover:text-pink-500", delay: 200 },
            { icon: FaTwitterSquare, href: "#", color: "hover:text-blue-400", delay: 300 }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              className={`text-white ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
              style={{ transitionDelay: `${social.delay}ms` }}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>

      

     

      {/* About Modal */}
      {showAbout && <About onClose={() => setShowAbout(false)} />}

      {/* Project Section */}
      <div id="projects-section" className="py-20">
        <ProjectSec />
      </div>

      {/* Client Reviews Section */}
      <div className="py-20">
        <Client />
      </div>

      {/* Contact Form Section */}
      <div id="contact-section" className="py-20">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />

      <CursorEffect/>
    </div>
  );
}

export default App;
