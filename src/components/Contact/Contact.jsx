import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import SectionTitle from '../UI/SectionTitle';

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ success: false, message: 'Please fill in all required fields.' });
      return;
    }
    
    try {
      // Prepare email content
      const subject = formData.subject || 'New Portfolio Contact Form Message';
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'N/A'}

Message:
${formData.message}
      `;
      
      // Create mailto link
      const mailtoLink = `mailto:luqmanbooso@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Try direct location change instead of window.open
      window.location.href = mailtoLink;
      
      // Show success message with fallback instructions
      setFormStatus({ 
        success: true, 
        message: 'Attempting to open email client. If nothing happens, please manually send an email to luqmanbooso@gmail.com with your message details.' 
      });
      
      // Log form submission for debugging
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after 10 seconds (increased from 5 for user to read instructions)
      setTimeout(() => {
        setFormStatus(null);
      }, 10000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({ 
        success: false, 
        message: 'Could not open email client. Please manually send an email to luqmanbooso@gmail.com with your message.' 
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'hello@example.com',
      href: 'mailto:hello@example.com'
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      content: '+1 (123) 456-7890',
      href: 'tel:+11234567890'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'New York City, NY',
      href: 'https://maps.google.com/?q=New+York+City'
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={22} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaGithub size={22} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaTwitter size={22} />, url: 'https://twitter.com', label: 'Twitter' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Let's talk about your project"
          isDarkMode={isDarkMode}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-1"
          >
            <div>
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold mb-8"
              >
                Contact Information
              </motion.h3>
              
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className={`flex items-center p-4 rounded-lg ${
                      isDarkMode 
                        ? 'bg-gray-800 hover:bg-gray-700' 
                        : 'bg-white hover:bg-gray-100'
                    } transition-colors duration-300 shadow-md`}
                  >
                    <div className={`w-12 h-12 rounded-full ${
                      isDarkMode ? 'bg-indigo-600' : 'bg-blue-600'
                    } flex items-center justify-center text-white mr-4`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm opacity-75 mb-1">{item.title}</h4>
                      <p className="font-semibold">{item.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* Social Media Links */}
              <motion.div variants={itemVariants} className="mt-10">
                <h4 className="text-xl font-semibold mb-4">Find Me On</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full ${
                        isDarkMode 
                          ? 'bg-gray-800 hover:bg-gray-700' 
                          : 'bg-white hover:bg-gray-100'
                      } flex items-center justify-center transition-colors duration-300`}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`p-8 rounded-lg shadow-lg lg:col-span-2 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-indigo-500' 
                        : 'bg-white border-gray-300 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      isDarkMode ? 'focus:ring-indigo-500' : 'focus:ring-blue-500'
                    }`}
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-indigo-500' 
                        : 'bg-white border-gray-300 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      isDarkMode ? 'focus:ring-indigo-500' : 'focus:ring-blue-500'
                    }`}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-indigo-500' 
                      : 'bg-white border-gray-300 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    isDarkMode ? 'focus:ring-indigo-500' : 'focus:ring-blue-500'
                  }`}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-indigo-500' 
                      : 'bg-white border-gray-300 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    isDarkMode ? 'focus:ring-indigo-500' : 'focus:ring-blue-500'
                  }`}
                  required
                ></textarea>
              </div>
              
              {formStatus && (
                <div 
                  className={`p-4 rounded-lg ${
                    formStatus.success 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg font-medium text-white ${
                  isDarkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors duration-300`}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;