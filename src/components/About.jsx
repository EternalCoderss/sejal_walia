import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { HiCheckCircle, HiMail, HiLocationMarker } from 'react-icons/hi';
import { personalInfo, stats, skills, achievements } from '../data/data';
import { slideUp, slideLeft, slideRight, staggerContainer, staggerItem } from '../utils/animations';
import sejalImage from '../assets/sejudiii.jpg';

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        const value = end.replace(/\D/g, '');
        const currentCount = Math.floor(parseInt(value) * progress);
        setCount(currentCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section bg-dark-900/50">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Profile Image with Apple-style effects */}
            <motion.div variants={slideLeft} className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Animated gradient background orbs */}
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Image container with floating animation */}
                <motion.div 
                  className="relative glass rounded-3xl p-1 overflow-hidden"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-3xl opacity-50" />
                  
                  <div className="relative rounded-3xl overflow-hidden bg-dark-900">
                    <img 
                      src={sejalImage}
                      alt="Sejal Walia - Business Development Executive"
                      className="w-full h-auto object-cover rounded-3xl"
                    />
                    
                    {/* Gradient overlay on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </motion.div>

                {/* Decorative floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-2xl opacity-40"
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 10, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full blur-2xl opacity-40"
                  animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -10, 0],
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Contact info badges with Apple-style glass effect */}
                <motion.div 
                  variants={staggerContainer}
                  className="mt-6 space-y-3"
                >
                  <motion.div 
                    variants={staggerItem}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass rounded-2xl p-4 flex items-center gap-3 border border-purple-500/20"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                      <HiMail className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-dark-400">Email</p>
                      <p className="text-dark-200 font-medium">{personalInfo.email}</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    variants={staggerItem}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass rounded-2xl p-4 flex items-center gap-3 border border-indigo-500/20"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 flex items-center justify-center">
                      <HiLocationMarker className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-dark-400">Location</p>
                      <p className="text-dark-200 font-medium">{personalInfo.location}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Bio & Info */}
            <motion.div variants={slideRight} className="space-y-8">
              {/* Title */}
              <div>
                <h3 className="text-3xl font-bold text-dark-50 mb-2">
                  {personalInfo.title}
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
              </div>

              {/* Bio */}
              <p className="text-lg text-dark-300 leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Stats Grid */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-xl p-6 text-center card-hover"
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.number.includes('+') || stat.number.includes('%') ? (
                        <CountUp end={stat.number} />
                      ) : (
                        stat.number
                      )}
                    </div>
                    <div className="text-dark-300 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Achievements */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-dark-50">Key Achievements</h4>
                <div className="space-y-3">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 text-dark-300"
                    >
                      <HiCheckCircle className="text-primary-500 text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={slideUp} className="space-y-8">
            <h3 className="text-3xl font-bold text-center gradient-text">
              Core Competencies
            </h3>
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="glass px-6 py-3 rounded-full text-dark-200 font-medium hover:bg-primary-500/20 hover:text-primary-300 transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
