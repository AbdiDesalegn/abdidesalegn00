'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '@/constants';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="pt-32 pb-24 sm:pt-40 sm:pb-32 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48 xl:pt-64 xl:pb-56 relative my-32 sm:my-40 md:my-48 lg:my-64 xl:my-72 grid-bg">
      <div className="center-section">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle mb-12 sm:mb-16 md:mb-20">
              Explore my diverse portfolio spanning multiple domains
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12">
              {PROJECT_CATEGORIES.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-16"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer"
              >
                <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden h-full flex flex-col border-2 border-transparent group-hover:border-orange-500 transition-all duration-300">
                  <div className={`h-40 sm:h-48 md:h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      initial={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/20">
                        <Code className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                      </div>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-black group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="tech-stack-btn"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 border-t-2 border-gray-100">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-1 sm:gap-2 text-black hover:text-orange-500 transition-all duration-300 font-bold px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-orange-50 text-sm sm:text-base"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-1 sm:gap-2 text-black hover:text-orange-500 transition-all duration-300 font-bold px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-orange-50 text-sm sm:text-base"
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
