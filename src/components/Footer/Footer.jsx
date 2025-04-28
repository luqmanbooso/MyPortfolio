import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = ({ isDarkMode }) => {
  const year = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter size={20} />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FaEnvelope size={20} />, href: 'mailto:example@example.com', label: 'Email' }
  ];

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'} pt-12 pb-8`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* About Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">
                <span className={isDarkMode ? "text-indigo-400" : "text-blue-600"}>Dev</span>Portfolio
              </h3>
              <p className="mb-4">
                Professional web developer specializing in creating high-performance, 
                user-friendly applications using modern web technologies.
              </p>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`${
                      isDarkMode 
                        ? 'hover:text-indigo-400' 
                        : 'hover:text-blue-600'
                    } transition-colors duration-300`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className={`hover:underline ${
                        isDarkMode 
                          ? 'hover:text-indigo-400' 
                          : 'hover:text-blue-600'
                      } transition-colors duration-300`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic">
                <p className="mb-2">New York City, NY</p>
                <p className="mb-2">
                  <a 
                    href="mailto:hello@example.com" 
                    className={`${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-blue-600'} transition-colors duration-300`}
                  >
                    hello@example.com
                  </a>
                </p>
                <p className="mb-2">
                  <a 
                    href="tel:+11234567890" 
                    className={`${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-blue-600'} transition-colors duration-300`}
                  >
                    +1 (123) 456-7890
                  </a>
                </p>
              </address>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} my-6`}></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {year} DevPortfolio. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 sm:mt-0 flex items-center"
          >
            Made with
            <FaHeart className={`mx-1 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
            using React & Tailwind
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
