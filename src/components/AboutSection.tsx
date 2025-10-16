'use client';

import { motion } from 'framer-motion';
import { SKILLS, INTERESTS } from '@/constants';

const AboutSection = () => {
  return (
    <section id="about" className="pt-32 pb-24 sm:pt-40 sm:pb-32 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48 xl:pt-64 xl:pb-56 relative my-32 sm:my-40 md:my-48 lg:my-64 xl:my-72">
      <div className="center-section">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">About Me</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Passionate Computer Science and Engineering graduate with strong expertise in mobile development, 
              MERN full-stack web development, and computational physics using machine learning tools.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-40 items-start">
            {/* Left side - Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-10"
            >
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-gray-100 hover:border-orange-500 transition-all">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {SKILLS.map(({ Icon, label, color }, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08, y: -5 }}
                      className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center cursor-pointer group border-2 border-gray-200 hover:border-orange-500 transition-all shadow-sm hover:shadow-lg"
                    >
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 md:mb-5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <p className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">{label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right side - Interests */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-10"
            >
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-gray-100 hover:border-orange-500 transition-all">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">My Interests</h3>
                <ul className="space-y-4 sm:space-y-6">
                  {INTERESTS.map((interest, index) => (
                    <motion.li
                      key={interest}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-3 sm:gap-4 group cursor-pointer bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-transparent hover:border-orange-500 transition-all"
                    >
                      <div className="mt-1 sm:mt-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-orange-500 group-hover:scale-150 flex-shrink-0 transition-transform"></div>
                      <span className="text-gray-700 text-sm sm:text-base md:text-lg group-hover:text-black transition-colors font-medium">
                        {interest}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-white"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-500 mx-auto mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 italic">
                  "Seeking opportunities to apply technical skills to innovative projects that bridge science, engineering, and software solutions"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
