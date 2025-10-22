'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, 
  ChevronDown
} from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 md:pt-40 md:pb-48">
      <motion.div
        style={{ y, opacity }}
        className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <div className="inline-block glass-card px-3 py-2 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              👋 Welcome to my portfolio
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 tracking-tight leading-none"
        >
          <span className="text-black">Abdi</span>{' '}
          <span className="text-gradient">Desalegn</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 mb-6 sm:mb-8 font-light"
        >
          Developer/Research Enthusiast
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto leading-relaxed px-4"
        >
          Passionate Computer Science and Engineering graduate with strong expertise in{' '}
          <span className="text-black font-semibold bg-gradient-to-r from-orange-100 to-orange-50 px-1 py-0.5 sm:px-2 sm:py-1 rounded-md text-xs sm:text-sm md:text-base">mobile development</span> (React Native),{' '}
          <span className="text-black font-semibold bg-gradient-to-r from-orange-100 to-orange-50 px-1 py-0.5 sm:px-2 sm:py-1 rounded-md text-xs sm:text-sm md:text-base">MERN full-stack</span> web development, 
          and <span className="text-black font-semibold bg-gradient-to-r from-orange-100 to-orange-50 px-1 py-0.5 sm:px-2 sm:py-1 rounded-md text-xs sm:text-sm md:text-base">computational physics</span> using machine learning tools.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <motion.a
            whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(255, 107, 53, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="btn-primary px-3 py-1.5 sm:px-6 sm:py-3 text-xs sm:text-sm flex items-center gap-1 sm:gap-2 w-auto justify-center min-w-[120px]"
          >
            View Projects
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="btn-secondary px-3 py-1.5 sm:px-6 sm:py-3 text-xs sm:text-sm flex items-center gap-1 sm:gap-2 w-auto justify-center min-w-[120px]"
          >
            <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 sm:mt-12 md:mt-16 flex justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap"
        >
          {SOCIAL_LINKS.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center text-gray-700 hover:text-orange-500 transition-colors"
              aria-label={label}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
