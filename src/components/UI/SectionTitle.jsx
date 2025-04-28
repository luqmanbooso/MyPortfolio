import React from 'react'
import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, isDarkMode }) => {
  return (
    <div className="text-center mb-16">
      <motion.h2 
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className={isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}>
          {title.split(' ')[0]}
        </span>{' '}
        {title.split(' ').slice(1).join(' ')}
      </motion.h2>
      
      <motion.div
        className="w-24 h-1 bg-indigo-500 mx-auto mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      <motion.p 
        className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {subtitle}
      </motion.p>
    </div>
  )
}

export default SectionTitle