'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronDown, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants';
import { FormData } from '@/types';

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setNotification({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setNotification({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-32 pb-24 sm:pt-40 sm:pb-32 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48 xl:pt-64 xl:pb-56 relative my-32 sm:my-40 md:my-48 lg:my-64 xl:my-72">
      <div className="center-section">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Let's collaborate on something amazing together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-40">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 md:space-y-10"
            >
              {CONTACT_INFO.map(({ Icon, label, value, href }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex items-center gap-3 sm:gap-4 md:gap-5 group cursor-pointer border-2 border-transparent hover:border-orange-500 transition-all"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">{label}</h3>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">{value}</p>
                  </div>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="contact-form-card glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 relative overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Connect with me</h3>
                      <p className="text-gray-600 font-medium text-sm sm:text-base">Let's stay connected</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center flex-wrap">
                    {SOCIAL_LINKS.map(({ Icon, href, label, color }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -8 }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-black text-white rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center ${color} transition-all shadow-lg hover:shadow-xl`}
                        aria-label={label}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="relative group"
            >
              <div className="contact-form-card glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 w-full relative">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Send me a message</h3>
                      <p className="text-gray-600 font-medium text-sm sm:text-base">Let's start a conversation</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <label className="block text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Abdi Desalegn"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input w-full outline-none font-medium text-gray-900"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="abdidesalegn00@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input w-full outline-none font-medium text-gray-900"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Project Collaboration"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="form-input w-full outline-none font-medium text-gray-900"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell me about your project and how we can work together..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-textarea w-full outline-none font-medium text-gray-900"
                        required
                      />
                    </div>
                    
                    {/* Notification */}
                    {notification.type && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 flex items-start sm:items-center gap-2 sm:gap-3 ${
                          notification.type === 'success'
                            ? 'bg-green-50 border-green-200 text-green-800'
                            : 'bg-red-50 border-red-200 text-red-800'
                        }`}
                      >
                        {notification.type === 'success' ? (
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                        ) : (
                          <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                        )}
                        <p className="font-medium text-sm sm:text-base leading-relaxed">{notification.message}</p>
                      </motion.div>
                    )}

                    <motion.button
                      whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 20px 40px rgba(255, 107, 53, 0.4)" } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl flex items-center justify-center gap-2 sm:gap-3 md:gap-4 group mt-4 sm:mt-6 md:mt-8 lg:mt-10 relative overflow-hidden rounded-lg sm:rounded-xl font-semibold transition-all ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'btn-primary'
                      }`}
                    >
                      <div className={`absolute inset-0 transition-opacity duration-300 ${
                        isSubmitting
                          ? 'bg-gray-500 opacity-100'
                          : 'bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100'
                      }`}></div>
                      <div className="relative z-10 flex items-center gap-2 sm:gap-3 md:gap-4">
                        {isSubmitting ? (
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 animate-spin" />
                        ) : (
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        )}
                        <span className="whitespace-nowrap">
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
                        {!isSubmitting && (
                          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
                        )}
                      </div>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
