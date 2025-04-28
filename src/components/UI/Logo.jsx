import React from 'react'

const Logo = ({ isDarkMode }) => {
  return (
    <div className="flex items-center">
      <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Dev<span className="text-indigo-600">Portfolio</span>
      </span>
    </div>
  )
}

export default Logo