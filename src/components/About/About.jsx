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
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className={`relative rounded-lg shadow-xl overflow-hidden w-full max-w-md  ${isDarkMode ? 'border-2 border-indigo-500' : ''}`}>
              <img 
                src={profilePicture}
                alt="Developer Portrait" 
                className="w-auto h-auto mt-5 object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x600?text=Developer+Portrait';
                }}
              />
              <div className={`absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t ${isDarkMode ? 'from-indigo-900/80' : 'from-indigo-600/70'} to-transparent`}></div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
              Full Stack Web Developer & UI/UX Enthusiast
            </h3>
            
            <p className="mb-6 text-lg leading-relaxed">
              Hi there! I'm a passionate web developer with a keen eye for creating elegant, responsive, and user-friendly websites. 
              With over 5 years of experience in the field, I specialize in building modern web applications using React, Node.js, 
              and other cutting-edge technologies.
            </p>
            
            <p className="mb-6 text-lg leading-relaxed">
              My journey began when I discovered the power of code to transform ideas into interactive experiences. 
              Since then, I've worked on numerous projects ranging from small business websites to complex enterprise applications,
              always striving for the perfect balance between functionality and aesthetics.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold mb-2">Education</h4>
                <ul className="space-y-2">
                  <li>• BSc in Computer Science</li>
                  <li>• Full Stack Web Development Certification</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Interests</h4>
                <ul className="space-y-2">
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
              } transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2`}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <span>Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;