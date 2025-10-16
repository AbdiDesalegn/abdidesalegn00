'use client';

import { motion } from 'framer-motion';
import { CERTIFICATES } from '@/constants';
import { ExternalLink, Award } from 'lucide-react';

const CertificatesSection = () => {
  return (
    <section id="certificates" className="pt-32 pb-24 sm:pt-40 sm:pb-32 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48 xl:pt-64 xl:pb-56 relative my-32 sm:my-40 md:my-48 lg:my-64 xl:my-72">
      <div className="center-section">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Certificates</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Professional certifications and specialized training
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {CERTIFICATES.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-100 hover:border-orange-500 transition-all group cursor-pointer h-full flex flex-col"
              >
                <div className="space-y-4 sm:space-y-6 flex-1 flex flex-col">
                  {/* Certificate Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <motion.a
                      href={`https://${cert.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group-hover:bg-orange-500 shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </motion.a>
                  </div>

                  {/* Certificate Content */}
                  <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black group-hover:text-orange-600 transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base text-orange-500 font-semibold bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                        {cert.issuer}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-800 transition-colors flex-1">
                      {cert.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
