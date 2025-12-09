import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiUpwork, SiGoogle, SiCanva, SiNotion, SiSlack, SiFigma,
  SiTrello, SiAsana, SiLinkedin, SiMicrosoft
} from 'react-icons/si';
import { slideUp, fadeIn, staggerContainer, staggerItem } from '../utils/animations';

const skillsData = [
  { name: "Proposal Writing", level: 95, category: "Core Skills" },
  { name: "Client Communication", level: 90, category: "Core Skills" },
  { name: "Lead Generation", level: 88, category: "Core Skills" },
  { name: "Market Research", level: 85, category: "Core Skills" },
  { name: "Negotiation", level: 92, category: "Core Skills" },
  { name: "CRM Management", level: 80, category: "Core Skills" }
];

const tools = [
  { name: "Upwork", icon: SiUpwork, color: "#6fda44" },
  { name: "Google Workspace", icon: SiGoogle, color: "#4285f4" },
  { name: "Canva", icon: SiCanva, color: "#00c4cc" },
  { name: "Notion", icon: SiNotion, color: "#000000" },
  { name: "Slack", icon: SiSlack, color: "#4a154b" },
  { name: "Figma", icon: SiFigma, color: "#f24e1e" },
  { name: "Trello", icon: SiTrello, color: "#0079bf" },
  { name: "Asana", icon: SiAsana, color: "#f06a6a" },
  { name: "LinkedIn", icon: SiLinkedin, color: "#0077b5" },
  { name: "Microsoft Office", icon: SiMicrosoft, color: "#f25022" }
];

const SkillsTools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section bg-dark-950">
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
              Skills & Tools
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Expertise and tools I use to deliver exceptional results
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Skills Progress Bars */}
          <motion.div variants={fadeIn} className="space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-50 mb-6">Professional Skills</h3>
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-dark-200 font-medium">{skill.name}</span>
                  <span className="text-primary-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-dark-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools Grid */}
          <motion.div variants={fadeIn} className="space-y-8">
            <h3 className="text-2xl font-bold text-dark-50 text-center">Tools & Platforms</h3>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="glass rounded-xl p-6 flex flex-col items-center gap-3 card-hover group"
                >
                  <tool.icon 
                    className="text-5xl transition-all duration-300"
                    style={{ color: tool.color }}
                  />
                  <span className="text-dark-300 text-sm text-center font-medium group-hover:text-dark-100 transition-colors">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsTools;
