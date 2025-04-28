import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import SocialLinks from '../UI/SocialLinks'

const Hero = ({ scrollToSection, isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }

  const childVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1] 
      }
    }
  }

  return (
    <div className="min-h-[100vh] flex flex-col justify-center relative overflow-hidden px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-5xl z-10"
      >
        <motion.div variants={childVariants} className="mb-4">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-900/30 text-indigo-300 text-sm font-medium mb-6">
            Full Stack Developer
          </span>
        </motion.div>

        <motion.h1 
          variants={childVariants}
          className="text-5xl md:text-6xl xl:text-7xl font-black mb-6 leading-tight"
        >
          <span className={isDarkMode ? "text-white" : "text-gray-800"}>Building</span>{" "}
          <span className="text-indigo-500">digital experiences</span>{" "}
          <span className={isDarkMode ? "text-white" : "text-gray-800"}>that</span>{" "}
          <span className="text-indigo-500">inspire</span>
        </motion.h1>

        <motion.div variants={childVariants} className="h-16 mb-8">
          <TypeAnimation
            sequence={[
              'I create responsive web applications', 2000,
              'I design clean user interfaces', 2000,
              'I build scalable back-end systems', 2000,
              'I solve complex development problems', 2000
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-xl md:text-2xl text-gray-400 font-medium"
          />
        </motion.div>

        <motion.p 
          variants={childVariants}
          className="text-lg md:text-xl max-w-2xl mb-10 text-gray-400"
        >
          I'm a passionate full-stack developer specializing in creating high-performance, 
          user-friendly applications with modern technologies including React, Node.js, 
          and cloud services.
        </motion.p>

        <motion.div variants={childVariants} className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#4338ca" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium
                       shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40
                       transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-lg font-medium border-2 
                        transition-all duration-300
                        ${isDarkMode 
                          ? 'border-gray-700 text-gray-300 hover:bg-gray-800' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                        }`}
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </motion.button>
        </motion.div>
        
        <motion.div variants={childVariants} className="mt-12">
          <SocialLinks isDarkMode={isDarkMode} />
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.button 
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.2 }}
            className={`flex flex-col items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-900/10"></div>
    </div>
  )
}

export default Hero