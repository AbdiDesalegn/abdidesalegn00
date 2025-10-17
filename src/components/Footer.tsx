'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

const Footer = () => {
  return (
    <footer className="footer-card text-white py-6 md:py-8 relative mt-16 md:mt-32">
      <div className="center-section">
        <div className="w-full max-w-3xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
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
              className="mb-3 md:mb-4"
            >
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-xl sm:text-2xl font-bold mb-2 md:mb-3"
              >
                <span className="text-white">Abdi</span>
                <span className="text-orange-500">.</span>
              </motion.h3>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-2 md:mb-3"></div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-4 md:mb-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium px-3"
            >
              Passionate about technology, physics, and creating innovative solutions 
              that bridge the gap between science and software.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6 flex-wrap"
            >
              {SOCIAL_LINKS.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="footer-social-btn w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-300 relative"
                  aria-label={label}
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 relative z-10" />
                </motion.a>
              ))}
              <motion.a
                href="mailto:abdidesalegn00@gmail.com"
                whileHover={{ scale: 1.2, y: -5 }}
                className="footer-social-btn w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-300 relative"
                aria-label="Email"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 relative z-10" />
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="border-t border-white/20 pt-3 md:pt-4"
            >
              <p className="text-gray-400 text-xs sm:text-sm font-medium px-3">
                © {new Date().getFullYear()} Abdi Desalegn. Crafted with passion and precision.
              </p>
              <p className="text-gray-500 text-xs mt-1 px-3">
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
