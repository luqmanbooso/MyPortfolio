import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ percentage, isDarkMode }) => {
  return (
    <div className={`w-full h-3 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-blue-500"
      />
    </div>
  );
};

export default ProgressBar;
