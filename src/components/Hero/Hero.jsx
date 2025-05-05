import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import SocialLinks from '../UI/SocialLinks'
import profilePicture from '../../assets/images/profile-photo.png'

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

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 1.2,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 0.4
      }
    }
  }

  // Tech stack badges
  const techBadges = [
    { name: 'React', color: 'bg-blue-500' },
    { name: 'Node.js', color: 'bg-green-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'TypeScript', color: 'bg-blue-700' },
    { name: 'MongoDB', color: 'bg-green-600' },
    { name: 'Tailwind CSS', color: 'bg-cyan-500' },
  ];

  return (
    <div className="min-h-[100vh] flex flex-col justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Large gradient circle */}
        <motion.div 
          className={`absolute w-[500px] h-[500px] rounded-full filter blur-3xl opacity-20 ${
            isDarkMode ? 'bg-indigo-700' : 'bg-indigo-500'
          }`}
          style={{ top: '-5%', right: '-10%' }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        {/* Small floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${8 + i * 4} h-${8 + i * 4} rounded-full opacity-10 ${
              i % 2 === 0 ? 'bg-blue-400' : 'bg-indigo-400'
            }`}
            style={{
              top: `${15 + i * 15}%`,
              left: `${5 + i * 20}%`,
            }}
            animate={{
              y: [0, -(20 + i * 5), 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className={`absolute inset-0 ${isDarkMode ? 'opacity-5' : 'opacity-[0.03]'}`} 
          style={{
            backgroundImage: `radial-gradient(circle, ${isDarkMode ? '#ffffff' : '#1e293b'} 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl z-10">
        {/* Hero content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Content Column - takes 3/5 of the space */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3"
          >
            <motion.div variants={childVariants} className="mb-6">
              <span className={`inline-block py-1.5 px-4 rounded-full text-sm font-medium tracking-wide ${
                isDarkMode 
                ? 'bg-indigo-900/40 text-indigo-300 border border-indigo-800' 
                : 'bg-indigo-100/80 text-indigo-700 border border-indigo-200'
              }`}>
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1 
              variants={childVariants}
              className="text-5xl md:text-6xl xl:text-7xl font-black mb-6 leading-tight tracking-tight"
            >
              <br />
              <span className={isDarkMode ? "text-white" : "text-gray-900"}>Building</span>{" "}
              <span className={`bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 to-blue-500' : 'from-indigo-600 to-blue-500'} text-transparent bg-clip-text`}>
                digital experiences
              </span>{" "}
              <span className={isDarkMode ? "text-white" : "text-gray-900"}>that</span>{" "}
              <span className={`bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 to-blue-500' : 'from-indigo-600 to-blue-500'} text-transparent bg-clip-text`}>
                inspire
              </span>
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
                className={`text-xl md:text-2xl font-medium ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                } typewriter-text`}
                speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
                deletionSpeed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                style={{ 
                  display: 'inline-block',
                  padding: '0.25rem 0',
                }}
              />
            </motion.div>

            <motion.p 
              variants={childVariants}
              className={`text-lg md:text-xl max-w-2xl mb-8 ${
                isDarkMode ? 'text-gray-300/90' : 'text-gray-600'
              } leading-relaxed`}
            >
              I'm a passionate full-stack developer specializing in creating high-performance, 
              user-friendly applications with modern technologies including React, Node.js, 
              and cloud services.
            </motion.p>

            {/* Tech badges */}
            <motion.div 
              variants={childVariants}
              className="flex flex-wrap gap-2 mb-8"
            >
              {techBadges.map((badge, index) => (
                <motion.span
                  key={index}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium text-white ${badge.color} 
                    flex items-center shadow-sm`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + (index * 0.1) }}
                >
                  {badge.name}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={childVariants} className="flex flex-wrap gap-5">
              {/* Hire Me Button with enhanced effect */}
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: isDarkMode ? '0 0 15px rgba(99, 102, 241, 0.5)' : '0 0 15px rgba(79, 70, 229, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-medium relative overflow-hidden group
                  ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-600'} text-white`}
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10">Hire Me</span>
                <motion.span 
                  className="absolute inset-0 bg-indigo-800 rounded-lg z-0" 
                  initial={{ width: '0%', left: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Download Resume button with enhanced effect */}
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-medium border-2 flex items-center gap-2
                  transition-all duration-300
                  ${isDarkMode 
                    ? 'border-gray-700 text-gray-200 hover:border-indigo-500/50' 
                    : 'border-gray-300 text-gray-800 hover:border-indigo-500/50'
                  }`}
                onClick={() => scrollToSection('projects')}
              >
                <span>Download Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </motion.button>
            </motion.div>
            
            <motion.div variants={childVariants} className="mt-12">
              <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Find me on</p>
              <SocialLinks isDarkMode={isDarkMode} />
            </motion.div>
          </motion.div>

          {/* Profile Picture Column - takes 2/5 of the space */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex lg:col-span-2 justify-center items-center"
          >
            <div className="relative">
              {/* Multi-layered background effect */}
              <motion.div 
                className={`absolute -inset-4 rounded-full ${
                  isDarkMode ? 'bg-gradient-to-br from-indigo-900/30 to-purple-900/30' : 'bg-gradient-to-br from-indigo-100 to-blue-100'
                }`}
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div 
                className={`absolute -inset-2 rounded-full ${
                  isDarkMode ? 'bg-gradient-to-tr from-blue-900/20 to-indigo-700/20' : 'bg-gradient-to-tr from-blue-50 to-indigo-100'
                }`}
                animate={{ 
                  scale: [1, 1.03, 1],
                  rotate: [0, -3, 0, 3, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              />
              
              {/* Profile image with frame */}
              <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden 
                shadow-2xl transform transition-transform duration-700 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/30 to-blue-700/30 mix-blend-overlay rounded-full" />
                
                {/* Glowing border effect */}
                <motion.div
                  className={`absolute -inset-0.5 rounded-full bg-gradient-to-r`}
                  animate={{
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <img 
                  src={profilePicture} 
                  alt="Developer Portrait"
                  className="w-full h-full object-cover rounded-full p-1"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/500x500?text=Profile+Photo';
                  }}
                />
              </div>
              
              {/* Floating decoration elements */}
              <motion.div
                className={`absolute -top-6 -right-6 w-20 h-20 rounded-full ${
                  isDarkMode ? 'bg-blue-600/20' : 'bg-blue-400/20'
                } backdrop-blur-sm`}
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full ${
                  isDarkMode ? 'bg-indigo-600/20' : 'bg-indigo-400/20'
                } backdrop-blur-sm`}
                animate={{ 
                  y: [0, 15, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Code symbols floating around */}
              {['</>','{}','()', '[]'].map((symbol, i) => (
                <motion.div
                  key={i}
                  className={`absolute text-sm font-mono ${
                    isDarkMode ? 'text-indigo-300/50' : 'text-indigo-600/50'
                  }`}
                  style={{
                    top: `${20 + i * 20}%`,
                    left: i % 2 === 0 ? '-10%' : '110%',
                  }}
                  animate={{
                    y: [0, i % 2 === 0 ? -20 : 20, 0],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, i % 2 === 0 ? 10 : -10, 0]
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {symbol}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.button 
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.2 }}
              className={`flex flex-col items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
            >
              <motion.span 
                className="text-sm font-medium mb-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Scroll Down
              </motion.span>
              <motion.div
                className={`w-8 h-12 rounded-full ${isDarkMode ? 'border-2 border-gray-400' : 'border-2 border-gray-700'} flex justify-center`}
              >
                <motion.div 
                  className={`w-1.5 h-3 ${isDarkMode ? 'bg-gray-400' : 'bg-gray-700'} rounded-full mt-2`}
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced gradient background */}
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-900/20' 
          : 'bg-gradient-to-b from-white via-white to-indigo-50'
      } -z-20`}></div>
    </div>
  )
}

export default Hero