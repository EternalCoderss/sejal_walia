import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import { projects } from '../data/data';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section bg-dark-900/50">
      <div className="container-custom">
        <div ref={ref} className="space-y-12">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Portfolio & Success Stories
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Showcasing impactful projects and measurable results in business development
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg shadow-purple-500/40 scale-105'
                    : 'glass text-dark-300 hover:text-fuchsia-400 border border-purple-500/20 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid - Simplified animations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-purple-500/20"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-fuchsia-900/30 via-purple-900/30 to-violet-900/30 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-violet-500/20" />
                  
                  {/* Project number/icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent opacity-20">
                      {project.id}
                    </div>
                  </div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-purple-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-sm font-medium px-6 py-2 border-2 border-fuchsia-400 rounded-full bg-fuchsia-500/20 backdrop-blur-sm">
                      View Details
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 backdrop-blur-sm rounded-full text-white text-xs font-semibold shadow-lg">
                    {project.category}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-dark-50 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-purple-500 transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-2 pt-2">
                    <div className="text-sm font-semibold bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                      Key Results:
                    </div>
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-dark-300">
                        <HiCheckCircle className="text-fuchsia-500 mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-dark-400">
              No projects found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
