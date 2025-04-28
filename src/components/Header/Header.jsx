import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from '../UI/ThemeToggle'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'
import Logo from '../UI/Logo'

const Header = ({ 
  activeSection, 
  scrollToSection, 
  isMenuOpen, 
  setIsMenuOpen, 
  isDarkMode, 
  toggleTheme 
}) => {
  const headerClass = isDarkMode 
    ? 'fixed w-full top-0 z-40 bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800' 
    : 'fixed w-full top-0 z-40 bg-white/90 backdrop-blur-md shadow-md'

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo isDarkMode={isDarkMode} />
        </motion.div>

        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLinks 
              activeSection={activeSection} 
              scrollToSection={scrollToSection}
              isDarkMode={isDarkMode}
            />
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                >
                  ✕
                </motion.span>
              ) : (
                <motion.span
                  whileTap={{ scale: 0.9 }}
                  className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                >
                  ☰
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu 
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            isDarkMode={isDarkMode}
          />
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header