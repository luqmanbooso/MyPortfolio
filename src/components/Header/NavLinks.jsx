import React from 'react'
import { motion } from 'framer-motion'

const NavLinks = ({ activeSection, scrollToSection, isDarkMode }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <>
      {navItems.map((item) => (
        <motion.button
          key={item.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(item.id)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeSection === item.id
              ? isDarkMode
                ? 'bg-indigo-900/50 text-indigo-300'
                : 'bg-indigo-100 text-indigo-700'
              : isDarkMode
                ? 'text-gray-300 hover:text-indigo-300 hover:bg-gray-800/50'
                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'
          }`}
        >
          {item.label}
          {activeSection === item.id && (
            <motion.div
              className="h-1 bg-indigo-500 rounded-full mt-1"
              layoutId="activeSection"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </>
  )
}

export default NavLinks