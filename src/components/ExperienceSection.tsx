'use client';

import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/constants';

const ExperienceSection = () => {
  return (
    <section id="experience" className="pt-32 pb-24 sm:pt-40 sm:pb-32 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48 xl:pt-64 xl:pb-56 relative my-32 sm:my-40 md:my-48 lg:my-64 xl:my-72">
      <div className="center-section">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Experience</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              My professional journey and organizational involvement
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500 rounded-full shadow-lg"></div>
            
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-8 sm:gap-12"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-all duration-300">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </div>
                    {/* Pulse Animation */}
                    <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-gray-100 hover:border-orange-500 transition-all group ml-4 sm:ml-6">
                    <div className="space-y-4 sm:space-y-6">
                      {/* Header */}
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black group-hover:text-orange-600 transition-colors leading-tight">
                            {exp.position}
                          </h3>
                          <span className="text-sm sm:text-base md:text-lg text-orange-500 font-semibold bg-orange-50 px-4 py-2 rounded-full border border-orange-200">
                            {exp.period}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold">
                          {exp.company}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-500 font-medium flex items-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {exp.location}
                        </p>
                      </div>
                      
                      {/* Description */}
                      <div className="space-y-3 sm:space-y-4">
                        {exp.description.map((desc, descIndex) => (
                          <motion.div
                            key={descIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.2) + (descIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 sm:gap-4 group/desc"
                          >
                            <div className="mt-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-500 flex-shrink-0 group-hover/desc:scale-125 transition-transform"></div>
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed group-hover/desc:text-gray-900 transition-colors">
                              {desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 text-center"
          >
            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-white">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-500 mx-auto mb-4 sm:mb-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 italic">
                "Seeking opportunities to apply technical skills to innovative projects that bridge science, engineering, and software solutions"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
