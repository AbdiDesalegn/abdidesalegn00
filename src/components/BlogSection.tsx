'use client';

import { motion } from 'framer-motion';
import { Brain, ChevronDown } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';

const BlogSection = () => {
  return (
    <section id="blog" className="pt-32 pb-24 sm:pt-40 sm:pb-32 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48 xl:pt-64 xl:pb-56 relative my-32 sm:my-40 md:my-48 lg:my-64 xl:my-72">
      <div className="center-section">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Latest Articles</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Thoughts on technology, physics, and the intersection of science and software
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer"
              >
                <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden h-full flex flex-col border-2 border-transparent group-hover:border-orange-500 transition-all duration-300">
                  <div className={`h-40 sm:h-48 md:h-56 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative`}>
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/20">
                        <Brain className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                      </div>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                      <span className="article-category-btn">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs sm:text-sm font-medium flex items-center gap-1">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime} read
                      </span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 text-black group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 pt-4 sm:pt-5 border-t-2 border-gray-100">
                      <span className="text-gray-500 text-xs sm:text-sm font-semibold flex items-center gap-2">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.date}
                      </span>
                      <motion.a
                        href="#"
                        whileHover={{ x: 5, scale: 1.05 }}
                        className="read-more-btn flex items-center gap-2 group text-sm sm:text-base"
                      >
                        Read More
                        <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
