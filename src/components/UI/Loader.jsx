import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ isDarkMode }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex space-x-2 mb-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-4 h-4 rounded-full ${isDarkMode ? 'bg-indigo-500' : 'bg-blue-600'}`}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: 'loop',
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        <motion.p 
          className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading awesome stuff...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;