import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaHandshake, 
  FaUsers, 
  FaFileAlt, 
  FaChartLine, 
  FaRocket, 
  FaBriefcase 
} from 'react-icons/fa';
import { services } from '../data/data';
import { slideUp, staggerContainer, staggerItem } from '../utils/animations';

const iconMap = {
  FaHandshake,
  FaUsers,
  FaFileAlt,
  FaChartLine,
  FaRocket,
  FaBriefcase
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section bg-dark-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={slideUp} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Services & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Comprehensive business development solutions tailored to drive growth and build lasting partnerships
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  variants={staggerItem}
                  whileHover={{ y: -10 }}
                  className="group glass rounded-2xl p-8 card-hover relative overflow-hidden"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-primary-900/0 group-hover:from-primary-600/10 group-hover:to-primary-900/10 transition-all duration-500 rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg shadow-primary-500/30"
                    >
                      <Icon />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-dark-50 group-hover:text-primary-300 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-dark-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div variants={slideUp} className="text-center pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Let's Discuss Your Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
