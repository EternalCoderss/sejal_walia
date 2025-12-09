import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiArrowDown } from 'react-icons/hi';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/data';
import { fadeIn, slideUp, slideLeft, slideRight } from '../utils/animations';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-purple-900/30">
        {/* Mouse-following gradient orb - More vibrant */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(255, 20, 220, 0.4) 0%, rgba(124, 58, 237, 0.3) 40%, rgba(59, 130, 246, 0.3) 70%, transparent 100%)',
          }}
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 0.5
          }}
        />
        
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-fuchsia-400 rounded-full"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            variants={fadeIn}
            className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-500 to-violet-500 text-lg md:text-xl font-medium tracking-wide"
          >
            👋 Business Development Expert
          </motion.p>

          {/* Name with vibrant Apple Intelligence gradient */}
          <motion.h1
            variants={slideUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 bg-clip-text text-transparent animate-gradient">
              {personalInfo.name.split(' ')[0]}
            </span>
            {' '}
            <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              {personalInfo.name.split(' ')[1]}
            </span>
          </motion.h1>

          {/* Tagline with highlight */}
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl lg:text-3xl text-dark-200 max-w-3xl mx-auto leading-relaxed"
          >
            I help freelancers & businesses{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500 font-semibold">win on Upwork</span>.
            Specializing in profile optimization, proposal writing, and converting leads into long-term clients.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168, 85, 247, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 text-white font-semibold rounded-lg hover:from-fuchsia-500 hover:via-purple-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-purple-500/50 flex items-center gap-2"
            >
              <span>📧</span>
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#services')}
              className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/20 transition-all duration-300"
            >
              View Services
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn}
            className="flex gap-6 justify-center pt-8"
          >
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-3xl text-dark-300 hover:text-fuchsia-400 transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-3xl text-dark-300 hover:text-purple-400 transition-colors"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href={socialLinks.email}
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-3xl text-dark-300 hover:text-violet-400 transition-colors"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-fuchsia-400 text-4xl hover:text-fuchsia-300 transition-colors"
        >
          <HiArrowDown />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
