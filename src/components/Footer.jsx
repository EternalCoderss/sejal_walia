import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

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
    <footer className="relative bg-dark-950 border-t border-dark-800">
      <div className="container-custom section">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              {personalInfo.name}
            </h3>
            <p className="text-dark-300 leading-relaxed">
              {personalInfo.title}
            </p>
            <p className="text-dark-400 text-sm">
              Building strategic partnerships and driving business growth through innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-dark-50">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5 }}
                  className="text-dark-300 hover:text-primary-400 transition-colors text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-dark-50">Get In Touch</h4>
            <div className="space-y-2 text-dark-300 text-sm">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
            </div>
            <div className="flex gap-4 pt-2">
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-2xl text-dark-400 hover:text-primary-400 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-2xl text-dark-400 hover:text-primary-400 transition-colors"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href={socialLinks.email}
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-2xl text-dark-400 hover:text-primary-400 transition-colors"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-dark-400 text-sm">
          <p className="flex items-center gap-2">
            © {currentYear} {personalInfo.name}. Made with{' '}
            <FaHeart className="text-primary-500 animate-pulse" /> and passion.
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 transition-shadow z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;
