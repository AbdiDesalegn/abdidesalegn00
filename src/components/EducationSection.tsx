'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const EducationSection = () => {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48 xl:pt-64 xl:pb-56 relative my-32 sm:my-40 md:my-48 lg:my-64 xl:my-72 grid-bg">
      <div className="center-section">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Education</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              My academic journey in Computer Science and Engineering
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div className="education-card glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-400/15 to-orange-600/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400/15 to-blue-600/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10 flex flex-col lg:flex-row items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16">
                  {/* Photo Section */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.4 }}
                    className="relative flex-shrink-0 mx-auto lg:mx-0"
                  >
                    <div className="education-photo w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden relative">
                      <Image
                        src="/image.png"
                        alt="Abdi's Photo"
                        width={192}
                        height={224}
                        className="w-full h-full object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="education-badge">
                      <span className="text-white text-sm sm:text-base md:text-lg">🎓</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                  </motion.div>
                  
                  {/* Content Section */}
                  <div className="flex-1 space-y-6 sm:space-y-8">
                    <div className="space-y-4 sm:space-y-6">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Bachelor of Science</h3>
                      <h4 className="text-xl sm:text-2xl md:text-3xl text-orange-500 font-bold">
                        Computer Science & Engineering
                      </h4>
                      <div className="space-y-2">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                          Adama Science and Technology University
                        </p>
                        <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-600 font-semibold">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          2020 - 2025
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-gray-100 hover:border-orange-500 transition-all">
                      <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                        Comprehensive study of computer science fundamentals, software engineering, 
                        advanced mathematics, and theoretical physics. Specialized coursework in 
                        machine learning, cybersecurity implementations, and quantum computing applications. 
                        Developed expertise in full-stack development, mobile applications, and 
                        computational physics simulations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
