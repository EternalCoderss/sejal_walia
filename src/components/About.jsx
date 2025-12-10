import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCheckCircle, HiMail, HiLocationMarker } from 'react-icons/hi';
import { personalInfo, stats, skills, achievements } from '../data/data';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section bg-dark-900/50">
      <div className="container-custom">
        <div ref={ref} className="space-y-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 mx-auto rounded-full" />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="glass rounded-3xl p-4 overflow-hidden border border-purple-500/20">
                  <div className="aspect-[3/4] bg-gradient-to-br from-fuchsia-900/30 via-purple-900/30 to-violet-900/30 rounded-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center mb-6 mx-auto">
                        <span className="text-6xl">👩‍💼</span>
                      </div>
                      <h3 className="text-2xl font-bold text-dark-50 mb-2">Sejal Walia</h3>
                      <p className="text-fuchsia-400 font-medium mb-4">Business Development Executive</p>
                      <p className="text-dark-400 text-sm">
                        Professional Image Coming Soon
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact info badges */}
                <div className="mt-6 space-y-3">
                  <div className="glass rounded-2xl p-4 flex items-center gap-3 border border-purple-500/20">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 flex items-center justify-center">
                      <HiMail className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-dark-400">Email</p>
                      <p className="text-dark-200 font-medium">{personalInfo.email}</p>
                    </div>
                  </div>
                  <div className="glass rounded-2xl p-4 flex items-center gap-3 border border-indigo-500/20">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-blue-600 flex items-center justify-center">
                      <HiLocationMarker className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-dark-400">Location</p>
                      <p className="text-dark-200 font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Bio & Info */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              className="space-y-8"
            >
              {/* Title */}
              <div>
                <h3 className="text-3xl font-bold text-dark-50 mb-2">
                  {personalInfo.title}
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full" />
              </div>

              {/* Bio */}
              <p className="text-lg text-dark-300 leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl p-6 text-center border border-purple-500/20 hover:-translate-y-1 transition-transform"
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-dark-300 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-dark-50">Key Achievements</h4>
                <div className="space-y-3">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 text-dark-300">
                      <HiCheckCircle className="text-fuchsia-500 text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center gradient-text">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="glass px-6 py-3 rounded-full text-dark-200 font-medium hover:bg-fuchsia-500/20 hover:text-fuchsia-300 transition-all cursor-default border border-purple-500/20"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
