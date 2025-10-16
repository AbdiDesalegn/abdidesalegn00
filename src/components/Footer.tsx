'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

const Footer = () => {
  return (
    <footer className="footer-card text-white py-12 md:py-16 relative mt-32 md:mt-64">
      <div className="center-section">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/5 via-transparent to-blue-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating particles effect */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-orange-400/10 to-orange-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-8"
            >
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4"
              >
                <span className="text-white">Abdi</span>
                <span className="text-orange-500">.</span>
              </motion.h3>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4 md:mb-6"></div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-8 md:mb-12 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium px-4"
            >
              Passionate about technology, physics, and creating innovative solutions 
              that bridge the gap between science and software.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12 flex-wrap"
            >
              {SOCIAL_LINKS.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="footer-social-btn w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-gray-300 relative"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10" />
                </motion.a>
              ))}
              <motion.a
                href="mailto:abdidesalegn00@gmail.com"
                whileHover={{ scale: 1.2, y: -5 }}
                className="footer-social-btn w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-gray-300 relative"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10" />
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="border-t border-white/20 pt-6 md:pt-8"
            >
              <p className="text-gray-400 text-sm sm:text-base font-medium px-4">
                © {new Date().getFullYear()} Abdi Desalegn. Crafted with passion and precision.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 px-4">
                Built with Next.js, TypeScript, and Framer Motion
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
