'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/constants';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass shadow-lg backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl sm:text-2xl font-bold tracking-tight group"
          >
            <span className="text-black group-hover:text-orange-500 transition-colors duration-300">Abdi</span>
            <span className="text-orange-500 group-hover:text-black transition-colors duration-300">.</span>
          </motion.a>
          
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-12 mr-8">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-base font-medium text-gray-700 hover:text-orange-500 transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a
                href="/admin"
                className="text-base font-medium text-gray-700 hover:text-orange-500 transition-colors relative group"
              >
                Admin
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 text-base"
            >
              Let's Talk
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass border-t"
        >
            <div className="px-4 sm:px-6 py-4 space-y-2">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-orange-500 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 text-base font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="/admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-orange-500 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 text-base font-medium"
            >
              Admin
            </a>
            <div className="pt-2 border-t border-gray-200 mt-4">
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary px-6 py-3 text-sm block text-center"
              >
                Let's Talk
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
