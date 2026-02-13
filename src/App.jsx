import { useState, useEffect, useRef } from 'react';
import Logo from './assets/Logo.png';
import { FaLinkedin, FaGithub, FaTwitterSquare, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import About from './components/About.jsx';
import ProjectSec from './components/ProjectSec.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CursorEffect from './CursorEffect.jsx';
import { motion, AnimatePresence } from 'framer-motion';

// ── Typewriter hook ────────────────────────────────────────────────────────────
function useTypewriter(words, typingSpeed = 90, deletingSpeed = 55, pauseMs = 1600) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'

  useEffect(() => {
    const current = words[wordIndex];

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('deleting'), pauseMs);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed);
        return () => clearTimeout(t);
      } else {
        setWordIndex((wordIndex + 1) % words.length);
        setPhase('typing');
      }
    }
  }, [displayed, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Typewriter — only on the name line
  const animatedName = useTypewriter(
    ['Bablu Kumar', 'a MERN Developer', 'a Problem Solver', 'Bablu Kumar'],
    85, 50, 1800
  );

  useEffect(() => { setIsLoaded(true); }, []);

  useEffect(() => {
    const handleAboutOpen = () => setShowAbout(true);
    window.addEventListener('openAboutModal', handleAboutOpen);
    return () => window.removeEventListener('openAboutModal', handleAboutOpen);
  }, []);

  const handleResumeDownload = () => {
    const resumeUrl = '/bablukumar_069.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Bablu_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='bg-[#111111] min-h-screen text-white font-sans selection:bg-blue-500/30 selection:text-white relative overflow-x-hidden'>

      {/* Background Layer 1: Gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#111111] via-[#151520] to-[#0f172a] -z-30"></div>

      {/* Background Layer 2: Dots */}
      <div className="fixed inset-0 opacity-10 -z-20" style={{
        backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}></div>

      {/* Custom Cursor & Particles */}
      <CursorEffect />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img src={Logo} alt="logo" className="h-12 w-auto" />
            </motion.div>

            <motion.button
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={handleResumeDownload}
              className="group relative px-6 py-2 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all hover:bg-white/10 hover:border-blue-500/30"
            >
              <div className="flex items-center gap-2 relative z-10">
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Resume</span>
                <FaDownload className="text-gray-400 text-xs group-hover:text-blue-400 group-hover:translate-y-0.5 transition-all" />
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-sm md:text-base font-medium text-blue-400 mb-4 tracking-wider uppercase">
              MERN Stack Developer
            </h2>

            {/* ── Animated heading ── */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block min-h-[1.2em]">
                {animatedName}
                {/* blinking cursor */}
                <span className="inline-block w-[3px] h-[0.85em] ml-1 align-middle bg-purple-400 rounded-sm animate-pulse" />
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              I build exceptional digital experiences that are fast, accessible, and visually stunning. Passionate about creating software that solves real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1"
              >
                View Work
              </button>
              <button
                onClick={() => setShowAbout(true)}
                className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-medium text-white hover:bg-white/10 transition-all"
              >
                About Me
              </button>
            </div>

            {/* Social Icons */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/bablu-kumar92/", color: "hover:text-blue-400" },
                { icon: FaGithub, href: "https://github.com/BabluKumar091", color: "hover:text-gray-400" },
                { icon: SiLeetcode, href: "https://leetcode.com/u/BabluKumar09/", color: "hover:text-[#FFA116]" },
                { icon: FaTwitterSquare, href: "https://twitter.com/BabluKumar091", color: "hover:text-blue-400" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 text-2xl transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Image — same as original */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 relative flex items-center justify-center py-16"
          >
            <div className="relative w-52 h-52 md:w-80 md:h-80 mx-auto">

              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[-15%] rounded-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-[50px]"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-8%] rounded-full"
                style={{
                  background: 'conic-gradient(from 90deg, transparent 70%, rgba(59,130,246,0.2), rgba(139,92,246,0.2), rgba(236,72,153,0.2), transparent 90%)',
                  padding: '1px',
                  borderRadius: '9999px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-5%]"
                style={{ borderRadius: '9999px' }}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400/50 shadow-[0_0_10px_2px_rgba(96,165,250,0.3)]"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
                className="relative z-10 w-full h-full"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                  <motion.div
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: 'radial-gradient(circle at 30% 50%, rgba(59,130,246,0.1) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(236,72,153,0.1) 0%, transparent 60%)',
                    }}
                  />
                  <img
                    src={Logo}
                    alt="Profile"
                    className="w-[85%] h-[85%] object-contain drop-shadow-2xl relative z-10"
                  />
                </div>
              </motion.div>

              {[
                { top: '15%', left: '15%', delay: 0 },
                { bottom: '15%', right: '15%', delay: 2 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  style={{ position: 'absolute', ...pos }}
                  animate={{ opacity: [0, 0.4, 0], scale: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: pos.delay, ease: 'easeInOut', times: [0, 0.5, 1] }}
                  className="w-1 h-1 rounded-full bg-white/30 blur-[1px]"
                />
              ))}

            </div>
          </motion.div>

        </div>
      </section>

      {/* About Modal */}
      <AnimatePresence>
        {showAbout && <About onClose={() => setShowAbout(false)} />}
      </AnimatePresence>

      <ProjectSec />
      <Education />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;