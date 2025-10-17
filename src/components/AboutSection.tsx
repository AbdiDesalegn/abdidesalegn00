'use client';

import { motion } from 'framer-motion';
import { Download, FileText, ArrowDown } from 'lucide-react';
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
                <h3 className="text-2xl sm:text-3xl font-bold mb-7 sm:mb-8 md:mb-10 text-center">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {SKILLS.map(({ Icon, label, color }, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08, y: -5 }}
                      className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center cursor-pointer group border-2 border-gray-200 hover:border-orange-500 transition-all shadow-sm hover:shadow-lg"
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-3 sm:mb-4 md:mb-5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
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
                <h3 className="text-2xl sm:text-3xl font-bold mb-7 sm:mb-8">My Interests</h3>
                <ul className="space-y-5 sm:space-y-6">
                  {INTERESTS.map((interest, index) => (
                    <motion.li
                      key={interest}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 sm:gap-5 group cursor-pointer bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 border-2 border-transparent hover:border-orange-500 transition-all"
                    >
                      <div className="mt-1 sm:mt-1.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500 group-hover:scale-150 flex-shrink-0 transition-transform"></div>
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
                className="glass-card rounded-2xl sm:rounded-3xl p-7 sm:p-8 text-center border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-white"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-orange-500 mx-auto mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 italic">
                  "Seeking opportunities to apply technical skills to innovative projects that bridge science, engineering, and software solutions"
                </p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Download Resume Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 md:mt-24"
          >
            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden group">
              {/* Background decoration */}
              <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-300/20 to-orange-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Ready to Learn More?
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                  Download my detailed resume to explore my complete professional journey, technical expertise, and project portfolio.
                </p>
                
                <motion.a
                  href="/Abdi-Desalegn-Resume.pdf"
                  download="Abdi-Desalegn-Resume.pdf"
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(255, 107, 53, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-3 py-1.5 sm:px-8 sm:py-4 text-xs sm:text-lg flex items-center gap-1 sm:gap-3 mx-auto w-fit font-semibold shadow-lg group-hover:shadow-xl transition-all duration-300 min-w-[120px] sm:min-w-auto"
                >
                  <Download className="w-3 h-3 sm:w-6 sm:h-6" />
                  Download Resume
                  <ArrowDown className="w-3 h-3 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </motion.a>
                
                <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>PDF</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
