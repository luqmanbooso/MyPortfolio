import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../UI/SectionTitle';
import profilePicture from '../../assets/images/profile-photo.png';

const About = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="My background and journey"
          isDarkMode={isDarkMode} 
        />
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Bio Content - Now on the left side */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
              Full Stack Web Developer & UI/UX Enthusiast
            </h3>
            
            <p className={`mb-6 text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Hi there! I'm a passionate web developer with a keen eye for creating elegant, responsive, and user-friendly websites. 
              With over 5 years of experience in the field, I specialize in building modern web applications using React, Node.js, 
              and other cutting-edge technologies.
            </p>
            
            <p className={`mb-6 text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My journey began when I discovered the power of code to transform ideas into interactive experiences. 
              Since then, I've worked on numerous projects ranging from small business websites to complex enterprise applications,
              always striving for the perfect balance between functionality and aesthetics.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Education</h4>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• BSc in Computer Science</li>
                  <li>• Full Stack Web Development Certification</li>
                </ul>
              </div>
              <div>
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Interests</h4>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Open Source Contribution</li>
                  <li>• UI/UX Design</li>
                  <li>• Technical Writing</li>
                </ul>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-medium ${
                isDarkMode 
                  ? 'bg-indigo-500 text-white hover:bg-indigo-600' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              } transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 w-fit`}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <span>Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Profile Image - Now on the right side */}
          <motion.div variants={itemVariants} className="flex justify-center items-center">
            <div className="relative w-full max-w-md h-[500px] overflow-hidden">
              {/* Background decoration */}
              <motion.div 
                className={`absolute inset-0 -z-10 transform -rotate-6 rounded-3xl ${
                  isDarkMode ? 'bg-indigo-900/20' : 'bg-indigo-100/70'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              
              {/* Image wrapper with masked bottom */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                {/* Actual image */}
                <motion.img 
                  src={profilePicture}
                  alt="Developer Portrait" 
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.2, y: 30 }}
                  whileInView={{ scale: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/500x600?text=Developer+Portrait';
                  }}
                />
                
                {/* Fade overlay - more subtle now */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t ${
                    isDarkMode 
                      ? 'from-gray-800 via-gray-800/70 to-transparent' 
                      : 'from-white via-white/70 to-transparent'
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                />
                
                {/* Side fade effect */}
                <motion.div 
                  className={`absolute top-0 bottom-0 right-0 w-1/4 bg-gradient-to-l ${
                    isDarkMode 
                      ? 'from-gray-800 to-transparent' 
                      : 'from-white to-transparent'
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className={`absolute -bottom-2 -left-2 w-24 h-24 rounded-full opacity-80 ${
                  isDarkMode ? 'bg-indigo-600/30' : 'bg-indigo-200'
                }`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.8 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              />
              
              <motion.div
                className={`absolute -top-4 -right-4 w-20 h-20 rounded-full ${
                  isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.8 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;