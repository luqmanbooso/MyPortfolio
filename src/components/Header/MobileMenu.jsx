import React from 'react'
import { motion } from 'framer-motion'

const MobileMenu = ({ activeSection, scrollToSection, isDarkMode }) => {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ]

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  }

  return (
    <motion.div
      className={`w-full overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="container mx-auto px-4 py-4">
        <motion.nav className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`py-2 px-4 rounded-md text-left ${
                activeSection === item.id
                  ? isDarkMode
                    ? 'bg-indigo-900/30 text-indigo-300'
                    : 'bg-indigo-100 text-indigo-700'
                  : isDarkMode
                    ? 'text-gray-300 hover:bg-gray-700/50'
                    : 'text-gray-700 hover:bg-gray-100'
              }`}
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.nav>
      </div>
    </motion.div>
  )
}

export default MobileMenu